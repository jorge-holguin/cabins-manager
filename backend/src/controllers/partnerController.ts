import { Request, Response } from 'express';
import Partner from '../models/Partner';

export const getAllPartners = async (req: Request, res: Response) => {
  try {
    const partners = await Partner.findAll();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching partners', error });
  }
};

export const createPartner = async (req: Request, res: Response) => {
  try {
    const { name, participationPercentage } = req.body;
    const newPartner = await Partner.create({ name, participationPercentage });
    res.status(201).json(newPartner);
  } catch (error) {
    res.status(500).json({ message: 'Error creating partner', error });
  }
};

export const updatePartner = async (req: Request, res: Response) => {
  try {
    const partner = await Partner.findByPk(req.params.id);
    if (partner) {
      await partner.update(req.body);
      res.json(partner);
    } else {
      res.status(404).json({ message: 'Partner not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating partner', error });
  }
};

export const deletePartner = async (req: Request, res: Response) => {
  try {
    const partner = await Partner.findByPk(req.params.id);
    if (partner) {
      await partner.destroy();
      res.json({ message: 'Partner deleted' });
    } else {
      res.status(404).json({ message: 'Partner not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting partner', error });
  }
};
