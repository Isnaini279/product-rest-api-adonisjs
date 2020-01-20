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

const getRajaOngkirCost = async () => {

  const response = config().request({
   method: 'POST',
      url: 'api/cost',
      data: {
        origin: '501',
        destination: '114',
        weight: 1700,
        courier: 'jne'
      }
    })

  return response;
};

const getRajaOngkirCity = async () => {

  const response = config().request({
   method: 'GET',
      url: 'city',
      data: {
      }
    })

  return response;
};

//panggil nama variabel function untuk menggunakan method:
module.exports = {
  getRajaOngkirCost, getRajaOngkirCity
};