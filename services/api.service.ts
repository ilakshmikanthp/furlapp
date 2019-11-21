//#region Global Imports 
import { ServiceSchema } from 'moleculer';
import ApiGateway = require('moleculer-web');
//#endregion Global Imports 

const ApiService: ServiceSchema = {
	name: 'v1',

	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html 
	settings: {
		port: process.env.PORT || 3000,

		routes: [
			{
				aliases: {
					// shifts APIs 
					'GET /furldetails': 'furlDetail.getShifts',
				},
				mappingPolicy: 'restrict',
				cors: {
					credentials: true,
					methods: ['GET', 'DELETE', 'POST', 'PUT', 'PATCH'],
					origin: ['*'],
				},
				path: '/v1',
				bodyParsers: {
					json: {
						limit: '5mb'
					}
				}
			},
		],

		// Serve assets from 'public' folder 
		assets: {
			folder: 'public',
		},
	},
};

export = ApiService; 
