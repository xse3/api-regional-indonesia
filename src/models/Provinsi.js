import { Sequelize, DataTypes, Model } from "sequelize";
import { db } from "../config/database.js";

const Provinsi = db.define(
  "provinsi",
  {
    id_prov: {
      primaryKey: true,
      unique: true,
      autoIncrement: false,
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

export default Provinsi;
