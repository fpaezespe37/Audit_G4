const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Rutas


const catalogoRoutes = require('./routes/catalogoRoutes');
const productRoutes = require('./routes/productRoutes');
const promotionRoutes = require('./routes/promotionRoutes');
const repositorioRoutes = require('./routes/repositorioRoutes');
const tipoProductRoutes = require('./routes/tipoProductRoutes.js');
const userRoutes = require('./routes/userRoutes');


const app = express();



app.get('/', (req, res) => {
    res.send('Página inicial');
});


mongoose.Promise = global.Promise;

require('dotenv').config();

const uri = 'mongodb+srv://admin:admin@cluster0.uxgwiwo.mongodb.net/Ecuabonsai?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Base de datos conectada!');
}).catch((error) => {
    console.log(error);
});


// Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

app.use('/', catalogoRoutes());
app.use('/', productRoutes());
app.use('/', promotionRoutes());
app.use('/', repositorioRoutes());
app.use('/', tipoProductRoutes());
app.use('/', userRoutes());

app.use(express.static('uploads'));

// server port


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at port ` + port);
  });
  

