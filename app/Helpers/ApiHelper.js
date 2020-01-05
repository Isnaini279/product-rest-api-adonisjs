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


module.exports = {
  
};