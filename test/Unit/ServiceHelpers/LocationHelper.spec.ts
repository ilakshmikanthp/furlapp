//#region Local Imports
import { LocationHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { ILocation} from '@Interfaces';
//#endregion Interface Imports

describe('Location Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(LocationHelper).toBeDefined();
	});
});

describe('Location service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await LocationHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
