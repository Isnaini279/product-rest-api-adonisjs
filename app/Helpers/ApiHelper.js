/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const Env = use('Env');
const axios = require('axios');

const config = () => axios.create({
  baseURL: Env.get('RAJAONGKIR_URL'),
  headers: {
    key: Env.get('RAJAONGKIR_KEY'),
  },
});

const getRajaOngkirCost = async (originParam, destinationParam, weightParam, courierParam) => {

  const response = config().request({
   method: 'POST',
      // url: 'api',
      data: {
      	key: Env.get('RAJAONGKIR_KEY'),
        origin: originParam,
        destination: destinationParam,
        weight: weightParam,
        courier: courierParam
      }
    })

  return response;
};

//panggil nama variabel function untuk menggunakan method ke bawah:
module.exports = {
  getRajaOngkirCost
};