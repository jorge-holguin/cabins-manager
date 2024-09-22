import { Request, Response } from 'express';
import UsageRecord from '../models/UsageRecord';
import Cabin from '../models/Cabin';
import { Op } from 'sequelize';

// Iniciar el uso de una cabina
export const startUsage = async (req: Request, res: Response) => {
  try {
    const { cabinId } = req.body;
    
    // Verificar si la cabina existe
    const cabin = await Cabin.findByPk(cabinId);
    if (!cabin) {
      return res.status(404).json({ message: 'Cabin not found' });
    }

    // Verificar si la cabina ya está en uso
    if (cabin.status === 'in_use') {
      return res.status(400).json({ message: 'Cabin is already in use' });
    }

    // Crear registro de uso
    const usageRecord = await UsageRecord.create({ cabinId, startTime: new Date() });

    // Actualizar el estado de la cabina a "in_use"
    await cabin.update({ status: 'in_use' });

    res.status(201).json(usageRecord); // Asegúrate de devolver el 'usageRecord'
  } catch (error) {
    res.status(500).json({ message: 'Error starting usage', error });
  }
};

// Finalizar el uso de una cabina y calcular el monto total
export const endUsage = async (req: Request, res: Response) => {
  try {
    const usageRecord = await UsageRecord.findByPk(req.params.id);
    
    if (!usageRecord) {
      return res.status(404).json({ message: 'Usage record not found' });
    }

    // Verificar si el uso ya ha terminado
    if (usageRecord.endTime) {
      return res.status(400).json({ message: 'Usage has already ended' });
    }

    const cabin = await Cabin.findByPk(usageRecord.cabinId);
    if (!cabin) {
      return res.status(404).json({ message: 'Cabin not found' });
    }

    // Calcular la duración y el costo total
    const endTime = new Date();
    const durationInHours = (endTime.getTime() - usageRecord.startTime.getTime()) / 3600000;
    const totalAmount = durationInHours * Number(cabin.rate);

    // Actualizar el registro de uso y la cabina
    await usageRecord.update({ endTime, totalAmount });
    await cabin.update({ status: 'standby' });

    res.json({ message: 'Usage ended successfully', usageRecord, totalAmount });
  } catch (error) {
    res.status(500).json({ message: 'Error ending usage', error });
  }
};

// Reanudar el uso de una cabina
export const resumeUsage = async (req: Request, res: Response) => {
  try {
    const usageRecord = await UsageRecord.findByPk(req.params.id);

    if (!usageRecord) {
      return res.status(404).json({ message: 'Usage record not found' });
    }

    // Verificar si el uso ya tiene un endTime (finalizado)
    if (!usageRecord.endTime) {
      return res.status(400).json({ message: 'Usage is already in progress' });
    }

    // Limpiar el endTime para reanudar el uso
    await usageRecord.update({ endTime: null });

    const cabin = await Cabin.findByPk(usageRecord.cabinId);
    if (cabin) {
      await cabin.update({ status: 'in_use' });
    }

    res.json({ message: 'Usage resumed successfully', usageRecord });
  } catch (error) {
    res.status(500).json({ message: 'Error resuming usage', error });
  }
};

// Obtener registros de uso
export const getUsageRecords = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    let whereClause = {};

    if (startDate && endDate) {
      whereClause = {
        startTime: {
          [Op.between]: [new Date(startDate as string), new Date(endDate as string)],
        },
      };
    }

    const usageRecords = await UsageRecord.findAll({
      where: whereClause,
      include: [Cabin],
    });

    res.json(usageRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching usage records', error });
  }
};
