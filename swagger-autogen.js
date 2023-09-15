const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json'; // Output JSON file for Swagger documentation
const endpointsFiles = ['./routes/*.js']; // Array of route files to scan

swaggerAutogen(outputFile, endpointsFiles);