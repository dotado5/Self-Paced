const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Self-Paced API",
    version: "1.0.0",
    description: "Self-Paced API Description",
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/index.ts'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
