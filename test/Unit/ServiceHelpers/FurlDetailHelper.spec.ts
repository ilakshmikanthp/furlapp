//#region Local Imports
import { FurlDetailHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IFurlDetail} from '@Interfaces';
//#endregion Interface Imports

describe('FurlDetail Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(FurlDetailHelper).toBeDefined();
	});
});

describe('FurlDetail service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await FurlDetailHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
