import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { Next } from 'mysql2/typings/mysql/lib/parsers/typeCast';

interface IPayload {
  id: number,
  role: string,
  iat: number,
  exp: number,
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if(!token) return res.status(401).json({message: 'Access denied'});

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret') as IPayload;
    req.userId = payload.id;
    req.userRole = payload.role;
    next();
  } catch (error) {
    return res.status(401).json({message: 'Invalid token'});
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if(req.userRole !== 'admin'){
    return res.status(403).json({message:'Access denied: Admins only'});
  }
next();
};