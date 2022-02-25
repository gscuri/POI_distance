const timeResult = (orderPoiByPlate) => {
  return orderPoiByPlate.map((prop) => {
    const { nome, placa, data_posicao } = prop;
    const date = data_posicao;
    const diffTime = Math.abs(date[date.length - 1] - date[0]);
    return {
      nome,
      placa,
      tempo_permanencia_minutos: Math.round(diffTime / 1000 / 60, 2),
    };
  });
};

module.exports = { timeResult };
