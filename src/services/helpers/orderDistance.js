const poiByPlate = (distance) => {
  const orderPoiByPlate = distance.reduce((acc, objActual) => {
    const poiByPlateObj = acc.find((newObj) => {
      return newObj.nome === objActual.nome && newObj.placa === objActual.placa;
    });
    if (!poiByPlateObj) {
      const arrayDate = [objActual.data_posicao];
      const objFiltered = { ...objActual, data_posicao: arrayDate.sort() };
      acc.push(objFiltered);
      return acc;
    }
    poiByPlateObj.data_posicao.push(objActual.data_posicao);
    return acc;
  }, []);
  return orderPoiByPlate;
};
module.exports = { poiByPlate };
