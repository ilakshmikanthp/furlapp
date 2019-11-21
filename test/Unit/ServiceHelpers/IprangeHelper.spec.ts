//#region Local Imports
import { IprangeHelper } from '@ServiceHelpers';
import { DummyContext } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { IIprange} from '@Interfaces';
//#endregion Interface Imports

describe('Iprange Service Helper Constructor', () => {
	it('should module exist', async () => {
		expect(IprangeHelper).toBeDefined();
	});
});

describe('Iprange service helpers', () => {
	it('', async () => {
		const params = {};

		const result = await IprangeHelper.methodName(DummyContext.getCall(params), params);

		expect(result).toBeDefined();
	});
});
