export const apikey = async (req, res, next) => {
  try {
    const apikey = req.headers["x-apikey"];
    const APIKEY = "Bearer " + process.env.APIKEY;

    if (apikey === APIKEY) {
      next();
    } else {
      res.status(401).send({
        status: false,
        message: "Invalid apikey",
      });
    }
  } catch (error) {
    next(error);
  }
};
