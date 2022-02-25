const haversineDistance = require('geodetic-haversine-distance');

const distanceCarPoi = (cordenatesCar, cordenatesPois) => {
  let result = [];
  let objAux = {};
  cordenatesCar.forEach(
    ({ latitude: latitudeCars, longitude: longitudeCars, placa, data_posicao }) => {
      cordenatesPois.forEach(({ latitude: latitudePoi, longitude: longitudePoi, raio, nome }) => {
        const distance =
          Math.round(
            haversineDistance(
              { latitude: latitudePoi, longitude: longitudePoi },
              { latitude: latitudeCars, longitude: longitudeCars }
            ) * 100
          ) / 100;
        if (distance <= raio) {
          objAux = {
            nome,
            placa,
            data_posicao: new Date(data_posicao),
          };
          result.push(objAux);
        }
      });
    }
  );
  return result;
};

module.exports = { distancePoiCar: distanceCarPoi };
