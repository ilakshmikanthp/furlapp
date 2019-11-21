export namespace IPagination {
	export interface PaginationIn {
		clientId: string;
		offset: number;
		limit: number;
		order_by: string;
		sort_order: string;
	}
}
