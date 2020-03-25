const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/*
*
* rota / recurso
*get - buscar informação no backend
*post - criar informação no backend
*put - altera as informações no backend
*delete - deleta informações no backed
*/
/*
* tipos de parametros
*
*Query params: parametros nomeados enviados na rota apos "?" (filtros , paginação)
*route params: parametros utilizados para identificar recursos
*requestbody: corpo da requisição usado para criar ou alterar recurso
*
*
*
 */


app.listen(3333);