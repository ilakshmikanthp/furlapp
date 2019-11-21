//#region Global Imports
import { createConnection, Connection } from 'typeorm';
// import { promises } from 'fs';
// import { eventNames } from 'cluster';
//#endregion Global Imports

export default async (): Promise<Connection | undefined> => {
	let retries: number = 1;
	let conn: any;
	while(retries){
		try {			
			// console.log("CONNECTING TO POSTGRESSQL");
			
			const dbTypeOrmSync: boolean = process.env.TYPEORM_ENV === 'development' ? true : false;
			conn = await createConnection({
				type: 'postgres',
				host: process.env.TYPEORM_HOST, //env.
				port: 5432,
				username: process.env.TYPEORM_USERNAME,
				password: process.env.TYPEORM_PASSWORD, // change based on the user to test it in local
				database: process.env.TYPEORM_DATABASE,
				synchronize: dbTypeOrmSync, // Production Make It FALSE
				logging: 'all',
				logger: 'file', // For Console use - "advanced-console"
				entities: [__dirname + '/*'],
			});
			retries = 0;
		} catch (error) {			
			console.log("Postgres trying to reconnect : ", retries, "Error :", error);
			retries -= 1;
			conn = undefined;
			await new Promise(res => setTimeout(res, 500));
		}
	}
	return conn;
};
