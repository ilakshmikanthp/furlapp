//#region Global Imports
import { ServiceBroker } from 'moleculer';
//#endregion Global Imports

/* eslint-disable */
//#region Local Imports
const FurlDetailService = require('../../services/furlDetail.service');
//#endregion Local Imports
/* eslint-enable */

export namespace BrokerHelper {
	export const setupBroker = () => {
		const broker = new ServiceBroker({ logger: true });
		broker.logger.info('hi output this text');		broker.createService(FurlDetailService);

		return broker;
	};
}
