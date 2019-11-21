const { MoleculerClientError, MoleculerError } = require('moleculer').Errors;

export class ResponseHandler {
	public static customErrorResponse(statusCode: number, error: any, requestRef: string, data: any) {
		const response = {
			statuscode: statusCode,
			error: error,
			requestRef: requestRef,
			data: data,
		};
		return response;
	}
	public static successResponse(statusCode: number, error: any, requestRef: string, data: any) {
		const response = {
			statuscode: statusCode,
			error: error,
			requestRef: requestRef,
			data: data,
		};
		return response;
	}

	public static errorResponse(message: string, statusCode: number, requestRef: string, data: any) {
		throw new MoleculerClientError(message, statusCode, requestRef, data);
	}

	public static errorResponseMol(
		message: string,
		statusCode: number,
		requestRef: string,
		data: any,
	) {
		throw new MoleculerError(message, statusCode, requestRef, data);
	}
}
