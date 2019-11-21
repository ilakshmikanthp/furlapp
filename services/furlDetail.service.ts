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

	// POST FURL Details
	@Action({
		params: {
			"entry_id":  { type: 'string' },
			"furl_description":  { type: 'string' },
			"target":  { type: 'string' },
			"location":  { type: 'string' },
			"description":  { type: 'string' },
			"upi":  { type: 'string' },
			"lead_contact":  { type: 'string' },
			"date": { type: 'string' },
			"comments":  { type: 'string' },
			"team_dl": { type: 'string' }
		}
	})
	public async createFurl(ctx: Context<any>): Promise<any> {
		const response = await this.createFurlMethod(ctx);
		
		if(!response.isExists){
			return ResponseHandler.successResponse(200, '', '', response.data);
		}
		return ResponseHandler.customErrorResponse(400, 'Record Exists', '', '')
	}

	@Method
	public async createFurlMethod(ctx: Context<any>): Promise<any> {
		return await FurlDetailRepository.createFurlDetail(ctx.params);
	}

	public stopped: Function = async () => await getConnection().close();
}

module.exports = new FurlDetailService();