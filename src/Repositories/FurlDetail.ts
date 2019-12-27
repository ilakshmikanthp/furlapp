//#region Local Imports
import { FurlDetail } from '@Entities/FurlDetail';
//#endregion Local Imports

//#region Interface Imports
import { IFurlDetail } from '@Interfaces';
import { getRepository, Any } from 'typeorm';
//#endregion Interface Imports

export namespace FurlDetailRepository {
	export const getFurlDetails = async (): Promise<any> => {
		return await getRepository(FurlDetail)
		.createQueryBuilder()
		.where('is_deleted=false')
		.getMany();
	};

	export const createFurlDetail = async (inParams:any): Promise<any> => {
		const count = await getRepository(FurlDetail)
			.createQueryBuilder()
			.where('furl_description=:furlDescription',{furlDescription:inParams.furl_description})
			.andWhere('is_deleted=false')
			.getCount();
		if(count){
			return { isExists : true };
		}
		return { data : await getRepository(FurlDetail).save(inParams) , isExists : false  };
	};

	export const deleteFurlDetail = async (id:number): Promise<any> => {
		return await getRepository(FurlDetail)
			.createQueryBuilder()
			.update(FurlDetail)
			.set({ is_deleted: true})
			.where("id = :id", { id: id })
			.andWhere("is_deleted=false")
			.returning('id')
			.execute();
	};

	export const updateFurlDetail = async (inParams:any): Promise<any> => {
		return await getRepository(FurlDetail)
		.createQueryBuilder()
		.update(FurlDetail)
		.set({ 
			furl_description: inParams.furl_description ,
			target: inParams.target,
			short_url: inParams.short_url,
			location: inParams.location,
			description: inParams.description,
			upi: inParams.upi,
			lead_contact: inParams.lead_contact,
			date: inParams.date,
			comments: inParams.comments,
			team_dl: inParams.team_dl
		})
		.where("id = :id", { id: inParams.id })
		.andWhere("is_deleted=false")
		.returning('id')
		.execute();
	};
}
