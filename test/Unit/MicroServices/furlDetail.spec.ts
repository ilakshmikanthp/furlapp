//#region Global Imports
//#endregion Global Imports

//#region Local Imports
import { FurlDetailHelper } from '@ServiceHelpers';
import { BrokerHelper } from '@Test/Utils';
//#endregion Local Imports

//#region Interface Imports
import { } from '@Interfaces';
//#endregion Interface Imports

const broker = BrokerHelper.setupBroker();

describe('Test FurlDetail service', () => {

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe('Test FurlDetail service actions', async () => {

		it('', async () => {
			const params = {
				// params
			};

			await FurlDetailHelper.methodName(broker as any, params);
		});
	});

});