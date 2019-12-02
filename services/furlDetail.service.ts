//#region Global Imports
import { Context } from 'moleculer';
import { Action, BaseSchema, Method } from 'moleculer-decorators';
import { getConnection } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
// import { } from '@ServiceHelpers';
import { FurlDetailRepository } from '@Repositories';
import connectionInstance from "@Entities/Connection"
import _ from 'lodash';
//#endregion Local Imports

//#region Interface Imports
import { } from '@Interfaces';
import { ResponseHandler } from '@Meta';
//#endregion Interface Imports

export class FurlDetailService extends BaseSchema {

	public name: string = 'furlDetail';
	public started: Function = async () => await connectionInstance();

	/**
	* @swagger
	*
	*  /furlDetail/<methodName>:
	//Example usage of swagger https://swagger.io/docs/specification/2-0/basic-structure/ }}//
	*      responses:
	*        200:
	*          description: Response message
	*        422:
	*          description: Response message
	*/
	@Action({
		params: {

		}
	})
	public async GetFurlDetail(ctx: Context<any>): Promise<any> {
		const response = await this.FurlDetailMethod();
		return ResponseHandler.successResponse(200, '', '', response);
	}

	@Method
	public async FurlDetailMethod(): Promise<any> {
		return await FurlDetailRepository.getFurlDetails();
	}

	//#region ---- POST FURL Details -----
	@Action({
		params: {
			"furl_description":  { type: 'string', optional: true },
			"target":  { type: 'string' , optional: true},
			"location":  { type: 'string' , optional: true},
			"description":  { type: 'string' , optional: true},
			"upi":  { type: 'string' , optional: true},
			"lead_contact":  { type: 'string' , optional: true},
			"date": { type: 'string' , optional: true},
			"comments":  { type: 'string' , optional: true},
			"team_dl": { type: 'string' , optional: true}
		}
	})
	public async createFurl(ctx: Context<any>): Promise<any> {
		const response = await this.createFurlMethod(ctx);
		
		if(!response.isExists){
			return ResponseHandler.successResponse(200, '', '', {status:'SUCCESS', id:response.data.id});
		}
		return ResponseHandler.customErrorResponse(400, 'Record Already Exists', '', '')
	}

	@Method
	public async createFurlMethod(ctx: Context<any>): Promise<any> {
		return await FurlDetailRepository.createFurlDetail(ctx.params);
	}

	//#endregion 

	//#region ---- PUT FURL Details -----
	@Action({
		params: {
			"furl_description":  { type: 'string', optional: true },
			"target":  { type: 'string' , optional: true},
			"location":  { type: 'string' , optional: true},
			"description":  { type: 'string' , optional: true},
			"upi":  { type: 'string' , optional: true},
			"lead_contact":  { type: 'string' , optional: true},
			"date": { type: 'string' , optional: true},
			"comments":  { type: 'string' , optional: true},
			"team_dl": { type: 'string' , optional: true}
		}
	})
	public async updateFurl(ctx: Context<any>): Promise<any> {
		const response = await this.updateFurlMethod(ctx);
		
		if(!_.isEmpty(response.raw[0])){
			return ResponseHandler.successResponse(200, '', '', {status:'SUCCESS', id:response.raw[0].id});
		}
		return ResponseHandler.customErrorResponse(400, 'No Record Exists', '', '')
	}

	@Method
	public async updateFurlMethod(ctx: Context<any>): Promise<any> {
		return await FurlDetailRepository.updateFurlDetail(ctx.params);
	}

	//#endregion 

	//#region ---- DELETE FURL Details -----
	@Action({
		params: {

		}
	})
	public async deleteFurl(ctx: Context<any>): Promise<any> {
		const response = await this.deleteFurlMethod(ctx);
		
		if(!_.isEmpty(response.raw[0])){
			return ResponseHandler.successResponse(200, '', '', {status:'SUCCESS', id:response.raw[0].id});
		}
		return ResponseHandler.customErrorResponse(400, 'No Record Exists', '', '')
	}

	@Method
	public async deleteFurlMethod(ctx: Context<any>): Promise<any> {
		return await FurlDetailRepository.deleteFurlDetail(ctx.params.id);
	}

	//#endregion 

	public stopped: Function = async () => await getConnection().close();
}

module.exports = new FurlDetailService();