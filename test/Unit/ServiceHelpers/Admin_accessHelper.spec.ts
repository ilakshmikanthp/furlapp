//#region Local Imports
import { Admin_accessHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IAdmin_access} from '@Interfaces';
//#endregion Interface Imports

describe('Admin_access Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(Admin_accessHelper).toBeDefined();
	});
});

describe('Admin_access service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await Admin_accessHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
