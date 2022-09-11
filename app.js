import express, { json } from "express";
import logger from "morgan";
import cors from "cors";
import {} from "dotenv/config";

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const ISDEV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() === "development" : false;

//router
import api from "./src/middlewares/routers/api.js";
import docs from "./src/middlewares/routers/docs.js";

app.use(logger("short"));
app.use(cors());
app.use(json());

app.use("/api", api);
app.use("/docs", docs);

//handle 404
app.use((req, res) => {
  res.send("404");
});

//handle error
app.use((err, req, res, next) => {
  if (ISDEV) console.error(err.message || err.stack);

  res.status(500).send({
    status: false,
    message: "Internal server error",
    error: err.message || err.stack,
  });
});

app
  .listen(PORT, HOST, () => {
    console.log(`App running http://${HOST}:${PORT}`);
  })
  .on("error", (err) => {
    console.error("App not running " + err.message);
  });
