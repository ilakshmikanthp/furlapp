//#region Global Imports
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//#endregion Global Imports

@Entity({ name: 'furl_detail'})
export class FurlDetail {
	@PrimaryGeneratedColumn()
	id?: number;

	// @Column({type: 'varchar', nullable:true})
	// entry_id: string;

	@Column({type: 'varchar', nullable:true})
	furl_description: string;

	@Column({type: 'varchar', nullable:true})
	target: string;

	@Column({type: 'varchar', nullable:true})
	location: string;

	@Column({type: 'varchar', nullable:true})
	description: string;

	@Column({type: 'varchar', nullable:true})
	upi: string;

	@Column({type: 'varchar', nullable:true})
	lead_contact: string;

	@Column({type: 'date', nullable:true})
	date: string;

	@Column({type: 'varchar', nullable:true})
	comments: string;

	@Column({type: 'varchar', nullable:true})
	team_dl: string;

	@Column({type: 'boolean', default:false})
	is_deleted?:boolean;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
	created_at?: string;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
	updated_at?: string;

	constructor( /*entry_id: string,*/ furl_description: string, target: string, location: string, description: string, 
		upi: string, lead_contact: string, date: string, comments: string, team_dl: string){
		// this.entry_id=entry_id ;
		this.furl_description=furl_description ;
		this.target=target ;
		this.location=location ;
		this.description=description ;
		this.upi=upi ;
		this.lead_contact=lead_contact ;
		this.date=date ;
		this.comments=comments ;
		this.team_dl=team_dl ;
	}
}
