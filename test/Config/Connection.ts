//#region Global Imports
import { createConnection, Connection } from 'typeorm';
//#region Global Imports

export default async (): Promise<Connection | undefined> => {
	try {
		return await createConnection({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "postgres",
			database: "test",
			synchronize: true, // Production Make It FALSE
			logging: false,
			entities: ['./src/Entities/*.ts']
		 });
	} catch (error) {
		return undefined;
	}
};
