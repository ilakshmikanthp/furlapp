import { FurlDetailRepository } from '../../../src/Repositories/FurlDetail';

describe('Test FurlDetailRepository constructor', () => {
	it('should create an empty options', () => {
		expect(FurlDetailRepository).toBeDefined();
	});

	it('should work (method name)', async () => {
		const result = await FurlDetailRepository.methodName(1);
		expect(result).toBeDefined();
	});
});
