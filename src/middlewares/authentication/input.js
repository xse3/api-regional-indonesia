import validator from "validator";
const { isNumeric, isAlpha } = validator;

export const query = (req, res, next) => {
  try {
    var obj = req.query;

    

    next();
  } catch (error) {
    next(error);
  }
};
