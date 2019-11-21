//#region Local Imports
import { RegularizationHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IRegularization} from '@Interfaces';
//#endregion Interface Imports

describe('Regularization Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(RegularizationHelper).toBeDefined();
	});
});

describe('Regularization service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await RegularizationHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
