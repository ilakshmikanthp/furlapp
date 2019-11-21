//#region Local Imports
import { ShiftBiddingHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IShiftBidding} from '@Interfaces';
//#endregion Interface Imports

describe('ShiftBidding Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(ShiftBiddingHelper).toBeDefined();
	});
});

describe('ShiftBidding service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await ShiftBiddingHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
