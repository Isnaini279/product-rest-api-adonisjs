'use strict';

const Helper = use('App/Helpers/ApiHelper');

class PostExampleController {

	async getDataCost({ request, response }) {
		// return "coba";

		//set value beberapa param yang akan di kirim ke helper:
		// const param = request.post();

		//mengirim parameter ke helper
		const cost = await Helper.getRajaOngkirCost();
		const {data} = cost;

		return data;
	}

	async getDataCity({ request, response }) {
		// return "coba";
		// const param = request.post();

		//mengirim parameter ke helper
		const city = await Helper.getRajaOngkirCity();
		const {data} = city;

		return data;
	}

}

module.exports = PostExampleController
