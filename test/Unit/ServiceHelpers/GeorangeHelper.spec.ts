//#region Local Imports
import { GeorangeHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IGeorange} from '@Interfaces';
//#endregion Interface Imports

describe('Georange Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(GeorangeHelper).toBeDefined();
	});
});

describe('Georange service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await GeorangeHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
