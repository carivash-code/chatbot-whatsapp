const axios = require('axios');
const address = {}
const distance = {}

function GetLocation(data) {

  const { latitude, longitude } = data;

  const config = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&key=AIzaSyD8vFSCCWTKoKnZfF-A8lUWPvM5khkvSMc',
    headers: {},
  }

  axios(config)
    .then(function (response) {
      const resp = response.data
      const { status } = resp;
      if(status == 'OK') {
        const { formatted_address } = resp.results[0];
        address.name = formatted_address;
        GetRatioDistance();
      }
    })
    .catch(function (error) {
      console.log(error)
    });
  
  return address
}

function GetRatioDistance() {
    const negocio = "El Mirador Manzana 016, 56700 Tlalmanalco, Méx."
    const myAddress = address.name;
    const config = {
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins='+negocio+'&destinations='+myAddress+'&units=si&key=AIzaSyD8vFSCCWTKoKnZfF-A8lUWPvM5khkvSMc',
      headers: {},
    }

  axios(config)
    .then(function (response) {
      const resp = response.data
      const { status } = resp;
      if(status == 'OK') {
        distance.data = resp.rows[0].elements;
      }
    })
    .catch(function (error) {
      console.log(error)
    });

}

module.exports = {
  GetLocation,
  GetRatioDistance,
  distance
}
