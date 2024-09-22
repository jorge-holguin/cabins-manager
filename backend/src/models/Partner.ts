import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Partner extends Model {
  public id!: number;
  public name!: string;
  public participationPercentage!: number;
}

Partner.init(
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
    participationPercentage: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Partner',
    tableName: 'partners',
  }
);

export default Partner;
