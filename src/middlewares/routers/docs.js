import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const docs = express.Router();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const swaggerDocs = swaggerJsDoc({
  apis: ["src/middlewares/routers/*.js"],
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Api Regional Indonesia",
      servers: [`http://${!HOST ? "localhost" : HOST}:${PORT}`],
    },
    paths: {
      "/api/v1/daerah/provinsi": {
        get: {
          description: "Request data provinsi",
          responses: {
            200: {
              description: "Request success",
            },
            500: {
              description: "Interal server erorr",
            },
          },
          parameters: [
            {
              name: "nama",
              description: "Nama provinsi",
              in: "query",
              required: false,
              type: "string",
            },
            {
              name: "id_prov",
              description: "Id provinsi",
              in: "query",
              required: false,
              type: "number",
            },
          ],
        },
      },
      "/api/v1/daerah/kabupaten": {
        get: {
          description: "Request data kabupaten",
          responses: {
            200: {
              description: "Request success",
            },
            500: {
              description: "Interal server erorr",
            },
          },
          parameters: [
            {
              name: "nama",
              description: "Nama kabupaten",
              in: "query",
              required: false,
              type: "string",
            },
            {
              name: "id_prov",
              description: "Id provinsi",
              in: "query",
              required: false,
              type: "number",
            },
            {
              name: "id_kab",
              description: "Id kabupaten",
              in: "query",
              required: false,
              type: "number",
            },
          ],
        },
      },
      "/api/v1/daerah/kecamatan": {
        get: {
          description: "Request data kecamatan",
          responses: {
            200: {
              description: "Request success",
            },
            500: {
              description: "Interal server erorr",
            },
          },
          parameters: [
            {
              name: "nama",
              description: "Nama kecamatan",
              in: "query",
              required: false,
              type: "string",
            },
            {
              name: "id_kab",
              description: "Id kabupaten",
              in: "query",
              required: false,
              type: "number",
            },
            {
              name: "id_kec",
              description: "Id kecamatan",
              in: "query",
              required: false,
              type: "number",
            },
          ],
        },
      },
      "/api/v1/daerah/kelurahan": {
        get: {
          description: "Request data kelurahan",
          responses: {
            200: {
              description: "Request success",
            },
            500: {
              description: "Interal server erorr",
            },
          },
          parameters: [
            {
              name: "nama",
              description: "Nama kelurahan",
              in: "query",
              required: false,
              type: "string",
            },
            {
              name: "id_kec",
              description: "Id kecamatan",
              in: "query",
              required: false,
              type: "number",
            },
            {
              name: "id_kel",
              description: "Id kelurahan",
              in: "query",
              required: false,
              type: "number",
            },
          ],
        },
      },
    },
  },
});

docs.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default docs;
