'use strict'

const Helper = use('App/Helpers/ApiHelper');

class PostExampleController {

	async getDataCost({ response }) {
		// return "coba";

		//set value beberapa param yang akan di kirim ke helper:
		const originParam = '501';
		const destinationParam = '114';
		const weightParam = 1700;
		const courierParam = 'jne';

		//mengirim parameter ke helper
		const cost = await Helper
			.getRajaOngkirCost(originParam, destinationParam, weightParam, courierParam);
		const {data} = cost;

		return data;
	}

}

module.exports = PostExampleController
