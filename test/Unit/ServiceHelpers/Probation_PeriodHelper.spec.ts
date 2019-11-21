//#region Local Imports
import { Probation_PeriodHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IProbation_Period} from '@Interfaces';
//#endregion Interface Imports

describe('Probation_Period Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(Probation_PeriodHelper).toBeDefined();
	});
});

describe('Probation_Period service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await Probation_PeriodHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
