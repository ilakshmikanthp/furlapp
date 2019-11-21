//#region Local Imports
import { Auto_approvalHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IAuto_approval} from '@Interfaces';
//#endregion Interface Imports

describe('Auto_approval Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(Auto_approvalHelper).toBeDefined();
	});
});

describe('Auto_approval service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await Auto_approvalHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
