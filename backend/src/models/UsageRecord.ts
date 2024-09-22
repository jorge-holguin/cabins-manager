import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Cabin from './Cabin';

class UsageRecord extends Model {
  public id!: number;
  public cabinId!: number;
  public startTime!: Date;
  public endTime!: Date | null;
  public totalAmount!: number | null;
}

UsageRecord.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cabinId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cabin,
        key: 'id',
      },
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'UsageRecord',
    tableName: 'usage_records',
  }
);

UsageRecord.belongsTo(Cabin, { foreignKey: 'cabinId' });

export default UsageRecord;
