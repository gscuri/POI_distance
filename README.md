
# Poi Distance

Imagine que um determinado cliente possui interesse em saber quanto tempo seus veículos ficaram em
determinadas regiões. 

Para isso, esse cliente cadastrou seus pontos de interesse (POIs) no
sistema e agora deseja visualizar, através de uma chamada de API, o tempo que cada veículo
permaneceu nos pontos cadastrados.

 - Essa Api vai retornar um Json com array de objetos informando a quantidade de tempo que os veículos
passaram dentro de cada POI em minutos; 
- O usuário poderá filtrar, se desejar, por data e placa do veículo na chamada da API. 
## Tecnologias

Nessa aplicaco foram utilizados:
- Linguagem: Javascript
- Back-end: Node, Express
- Database: csv
## Instalação

Inicie o processo :

Instale o back-end com npm install

```bash
    npm install 
```
Para rodar a aplicação:
```bash
    npm run dev 
```

## Documentação da API

#### Retorna todos os itens:

```http
  GET /find
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | Nome do POI cadastrado|
| `placa` | `string` | Placa do veículo desejado|
| `tempo_permanencia_minutos` | `number` | Tempo em minutos|

#### Retorna por Placa ou Data desejada:

```http
  GET /find/plate
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `placa` | `string` | Placa do veículo desejado|
| `data` | `string` | Filtrar por Data n formato "Dec DD YYYY"|



## Documentação

[haversine-distance](https://www.npmjs.com/package/geodetic-haversine-distance)

[csv-parser-sync-plus-promise](https://www.npmjs.com/package/csv-parser-sync-plus-promise)

[chaijs](https://www.chaijs.com/)

[chai-http](https://github.com/chaijs/chai-http#readme)

[expressjs](http://expressjs.com/)

[mochajs](https://mochajs.org/)

[sinonjs](https://sinonjs.org/)

[Fórmula de haversine](https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_haversine)

