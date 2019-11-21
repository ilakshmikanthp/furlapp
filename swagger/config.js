const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
	info: {
		title: 'TeamLease Digital Workforce Solutions - ATL', // Title of the documentation
		version: '1.0.0', // Version of the app
		description:
			"TL DWS - ATL API's", // short description of the app
	},
	host: 'localhost:3000', // the host or url of the app
	basePath: '/api', // the basepath of your endpoint
};

// options for the swagger docs
const options = {
	// import swaggerDefinitions
	definition: swaggerDefinition,
	explorer: true,

	// path to the API docs
	apis: ['./*.service.ts'],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
