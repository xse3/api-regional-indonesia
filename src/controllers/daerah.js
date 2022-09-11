import { Op } from "sequelize";
import Model from "../models/_Models.js";

export const prov = async (req, res, next) => {
  var where = modelWhere(req.query);
  try {
    var data = await Model.Prov.findAll({
      where: where,
      raw: true,
    });
    res.status(200).send({
      status: true,
      message: "",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const kab = async (req, res, next) => {
  var where = modelWhere(req.query);

  try {
    var data = await Model.Kab.findAll({
      where: where,
      raw: true,
    });
    res.status(200).send({
      status: true,
      message: "",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const kec = async (req, res, next) => {
  var where = modelWhere(req.query);
  try {
    var data = await Model.Kec.findAll({
      where: where,
      raw: true,
    });
    res.status(200).send({
      status: true,
      message: "",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const kel = async (req, res, next) => {
  var where = modelWhere(req.query);
  try {
    var data = await Model.Kel.findAll({
      where: where,
      raw: true,
    });
    res.status(200).send({
      status: true,
      message: "",
      data,
    });
  } catch (error) {
    next(error);
  }
};

function modelWhere(...params) {
  var obj = params[0];
  var where = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      where[key] = { [Op.substring]: obj[key] };
    }
  }
  return where;
}
