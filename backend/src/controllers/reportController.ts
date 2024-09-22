import { Request, Response } from 'express';
import UsageRecord from '../models/UsageRecord';
import Expense from '../models/Expense';
import Partner from '../models/Partner';
import { Op } from 'sequelize';

export const getIncomeReport = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    let whereClause = {};

    if (startDate && endDate) {
      whereClause = {
        endTime: {
          [Op.between]: [new Date(startDate as string), new Date(endDate as string)],
        },
      };
    }

    const totalIncome = await UsageRecord.sum('totalAmount', { where: whereClause });

    res.json({ totalIncome });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching income report', error });
  }
};

export const getExpenseReport = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    let whereClause = {};

    if (startDate && endDate) {
      whereClause = {
        date: {
          [Op.between]: [new Date(startDate as string), new Date(endDate as string)],
        },
      };
    }

    const totalExpenses = await Expense.sum('amount', { where: whereClause });

    res.json({ totalExpenses });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expense report', error });
  }
};

export const getProfitReport = async (req: Request, res: Response) => {
  try {
    // Obtener ingresos totales
    const totalIncome = await UsageRecord.sum('totalAmount');

    // Obtener gastos totales
    const totalExpenses = await Expense.sum('amount');

    // Calcular rentabilidad neta
    const netProfit = totalIncome - totalExpenses;

    // Obtener socios y calcular ganancias
    const partners = await Partner.findAll();
    const partnerProfits = partners.map((partner) => ({
      partner: partner.name,
      profit: (netProfit * Number(partner.participationPercentage)) / 100,
    }));

    res.json({
      totalIncome,
      totalExpenses,
      netProfit,
      partnerProfits,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profit report', error });
  }
};
