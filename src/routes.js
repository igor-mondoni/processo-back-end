const express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())
var corsOptions = {
    optionsSuccessStatus: 200
  }
const PessoaController = require('./controllers/PessoaController');

const routes = express.Router();

  
routes.get('/pessoas',cors(corsOptions), PessoaController.index);
routes.post('/pessoas/register/:id?',cors(corsOptions), PessoaController.store);
routes.get('/pessoas/delete/:id',cors(corsOptions), PessoaController.destroy);
routes.get('/pessoas/show/:id',cors(corsOptions), PessoaController.show);

module.exports = routes;