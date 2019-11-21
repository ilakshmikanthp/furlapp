//#region Local Imports
import { FurlDetail } from '@Entities/FurlDetail';
//#endregion Local Imports

//#region Interface Imports
import { IFurlDetail } from '@Interfaces';
import { getRepository } from 'typeorm';
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
			.where('entry_id=:entry_id',{entry_id:inParams.entry_id})
			.andWhere('is_deleted=false')
			.getCount();
		if(count){
			return { isExists : true };
		}
		return { data : await getRepository(FurlDetail).save(inParams) , isExists : false  };
	};
}
