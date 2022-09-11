import { Sequelize, DataTypes } from "sequelize";
import { db } from "../config/database.js";

const Kecamatan = db.define(
  "kecamatan",
  {
    id_kec: {
      primaryKey: true,
      unique: true,
      autoIncrement: false,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_kab: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Kecamatan;
