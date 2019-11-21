//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//#endregion Global Imports

@Entity({ name: 'furl_detail'})
export class FurlDetail {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	constructor(first_name: string, last_name: string){
		this.first_name=first_name;
		this.last_name=last_name;
	}
}
