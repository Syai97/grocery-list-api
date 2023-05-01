import sequelize from "./sequelize";
import { Model, DataTypes } from "sequelize";

class Product extends Model {
  public id!: number;
  public brand!: string;
  public name!: string;
  public upc12!: string;

  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        len: {
          args: [2, 64],
          msg: "Brand name length must be between 2 and 64 characters",
        },
      },
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        len: {
          args: [2, 64],
          msg: "Product name length must be between 2 and 64 characters",
        },
      },
    },
    upc12: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: "Barcode must be integer value only",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

export default Product;
