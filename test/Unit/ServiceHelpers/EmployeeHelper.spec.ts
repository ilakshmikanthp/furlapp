//#region Local Imports
import { EmployeeHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IEmployee} from '@Interfaces';
//#endregion Interface Imports

describe('Employee Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(EmployeeHelper).toBeDefined();
	});
});

describe('Employee service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await EmployeeHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
