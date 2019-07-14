const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * Requerir la ruta de los emails
 */
const email = require('./route/email');

/**
 * Config
 */
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(cors());

/**
 * Usando ruta de los emails
 */
app.use(email);

/**
 * Arrancando servidor
 */
app.listen(app.get('port'), ()  => {
  console.log('Servidor corriendo en el puerto ' + app.get('port'));
});