const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Reservation API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Path to your API route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;