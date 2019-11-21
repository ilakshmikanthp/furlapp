//#region Local Imports
import { Manager_accessHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IManager_access} from '@Interfaces';
//#endregion Interface Imports

describe('Manager_access Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(Manager_accessHelper).toBeDefined();
	});
});

describe('Manager_access service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await Manager_accessHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
