const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet"),
  server = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { setRoutes } = require("./routes");

server.use(helmet());

const cors = require("cors"),
  corsOption = {
    origin: "*",
  };

server.use(cors(corsOption));
server.use(bodyParser.json());

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "APIs",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          name: "Authorization",
          scheme: "bearer",
          in: "header",
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    }
  },
  apis: ["src/routes/*.js", "src/models/*.js"],
};

const specs = swaggerJsDoc(options);

server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Docs in JSON format
server.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

setRoutes(server);

module.exports = { server };
