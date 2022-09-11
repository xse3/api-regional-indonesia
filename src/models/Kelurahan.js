import { Sequelize, DataTypes } from "sequelize";
import { db } from "../config/database.js";

const Kelurahan = db.define(
  "kelurahan",
  {
    id_kel: {
      primaryKey: true,
      unique: true,
      autoIncrement: false,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_kec: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_jenis: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Kelurahan;
