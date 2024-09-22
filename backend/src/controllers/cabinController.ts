import { Request, Response } from 'express';
import Cabin from '../models/Cabin';

export const getAllCabins = async (req: Request, res: Response) => {
  try {
    const cabins = await Cabin.findAll();
    res.json(cabins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cabins', error });
  }
};

export const getCabinById = async (req: Request, res: Response) => {
  try {
    const cabin = await Cabin.findByPk(req.params.id);
    if (cabin) {
      res.json(cabin);
    } else {
      res.status(404).json({ message: 'Cabin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cabin', error });
  }
};

export const createCabin = async (req: Request, res: Response) => {
  try {
    const { name, rate } = req.body;
    const newCabin = await Cabin.create({ name, rate });
    res.status(201).json(newCabin);
  } catch (error) {
    res.status(500).json({ message: 'Error creating cabin', error });
  }
};

export const updateCabin = async (req: Request, res: Response) => {
  try {
    const cabin = await Cabin.findByPk(req.params.id);
    if (cabin) {
      await cabin.update(req.body);
      res.json(cabin);
    } else {
      res.status(404).json({ message: 'Cabin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating cabin', error });
  }
};

export const deleteCabin = async (req: Request, res: Response) => {
  try {
    const cabin = await Cabin.findByPk(req.params.id);
    if (cabin) {
      await cabin.destroy();
      res.json({ message: 'Cabin deleted' });
    } else {
      res.status(404).json({ message: 'Cabin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cabin', error });
  }
};
