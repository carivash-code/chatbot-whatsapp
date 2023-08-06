require('dotenv').config();
const axios = require('axios')
const address = {}

function GetLocation(data) {
  const { latitude, longitude } = data

  const config = {
    method: 'get',
    url:
      'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      latitude +
      ',' +
      longitude +
      '&key=AIzaSyD8vFSCCWTKoKnZfF-A8lUWPvM5khkvSMc',
    headers: {},
  }

  axios(config)
    .then(function (response) {
      const resp = response.data
      const { status } = resp
      if (status == 'OK') {
        const { formatted_address } = resp.results[0]
        address.name = formatted_address
      }
    })
    .catch(function (error) {
      console.log(error)
    })

  return Promise.resolve(address)
}

function GetRatioDistance(data) {
  const { latitude, longitude } = data;
  const negocio = '19.206894542356043, -98.79635189785824';
  const myAddress = latitude + ',' + longitude;
  const dataD = {};

  const config = {
    method: 'get',
    url:
      'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' +
      negocio +
      '&destinations=' +
      myAddress +
      '&units=si&key='+process.env.API_KEY,
    headers: {},
  }

  return axios(config)
    .then(function (response) {
      const resp = response.data
      const { status } = resp
      if (status == 'OK') {
        dataD.data = resp.rows[0].elements[0];
        return Promise.resolve(resp.rows[0].elements[0]);
      }
    })
    .catch(function (error) {
      console.log(error)
      return Promise.resolve(error);
    })
}

module.exports = {
  GetRatioDistance,
}
