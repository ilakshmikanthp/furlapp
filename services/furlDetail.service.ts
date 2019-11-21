//#region Global Imports
import { Context } from 'moleculer';
import { Action, BaseSchema, Method } from 'moleculer-decorators';
import { getConnection } from 'typeorm';
//#endregion Global Imports

//#region Local Imports
// import { } from '@ServiceHelpers';
import { } from '@Repositories';
import connectionInstance from "@Entities/Connection"
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
		return {};
	}

	public stopped: Function = async () => await getConnection().close();
}

module.exports = new FurlDetailService();