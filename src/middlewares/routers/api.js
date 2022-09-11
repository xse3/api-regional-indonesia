import express from "express";
const api = express.Router();

import con from "../../controllers/_controllers.js";
import auth from "../authentication/_auth.js";

/* api v1 */
api.get("/v1/daerah/provinsi", auth.input.query, auth.basic.apikey, con.daerah.prov);
api.get("/v1/daerah/kabupaten", con.daerah.kab);
api.get("/v1/daerah/kecamatan", con.daerah.kec);
api.get("/v1/daerah/kelurahan", con.daerah.kel);

export default api;
