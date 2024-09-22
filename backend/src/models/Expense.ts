import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Expense extends Model {
  public id!: number;
  public type!: string;
  public description!: string;
  public amount!: number;
  public date!: Date;
}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('fixed', 'variable'),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Expense',
    tableName: 'expenses',
  }
);

export default Expense;
