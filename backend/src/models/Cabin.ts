// src/models/Cabin.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Cabin extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
  public rate!: number;
}

Cabin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('in_use', 'standby', 'free_hour'), // Corregido aquí
      allowNull: false,
      defaultValue: 'standby',
    },
    rate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 2.0,
    },
  },
  {
    sequelize,
    modelName: 'Cabin',
    tableName: 'cabins',
  }
);

export default Cabin;
