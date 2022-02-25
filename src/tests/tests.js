// chama requisicao e ver resposta de cada rota com testes de integração
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../api/app');
chai.use(chaiHttp);

const { expect } = chai;

describe('testando /find', () => {
  describe('Busca o tempo que cada veículo permaneceu nos pontos cadastrados', () => {
    let response = null;
    before(async () => {
      response = await chai.request(app).get('/find');
    });
    it('testa se status lido é 200', () => {
      expect(response).to.have.status(200);
    });
    it('verifica se a resposta tem a propiedade nome,placa e tempo_permanencia_minutos', () => {
      expect(response.body[0]).to.have.property('nome');
      expect(response.body[1]).to.have.property('placa');
      expect(response.body[2]).to.have.property('tempo_permanencia_minutos');
    });
    it('verifica se a resposta é um aray', () => {
      expect(response.body).to.be.an('array');
    });
  });
  describe('testando rota /find/plate', () => {
      let response = null;
        before(async () => {
          response = await chai.request(app).get('/find/plate');
        });
    it('testa se status lido é 200', () => {
      expect(response).to.have.status(200);
    });
    it('verifica se a resposta tem a propiedade nome,placa e tempo_permanencia_minutos', () => {
      expect(response.body[0]).to.have.property('nome');
      expect(response.body[1]).to.have.property('placa');
      expect(response.body[2]).to.have.property('tempo_permanencia_minutos');
    });
    it('verifica se a resposta é um aray', () => {
      expect(response.body).to.be.an('array');
    });
  });
});
