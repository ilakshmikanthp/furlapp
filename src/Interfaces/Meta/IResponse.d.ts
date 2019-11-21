export namespace IResponse {
	export interface IResponse {
		statusCode: number;
		error: string;
		requestRef: string;
		data: Record<string, any>;
	}
}
