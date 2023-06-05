const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catalogoSchema = new Schema({
    idproducto: {
        type: String,
        trim: true,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    idpromocion: {
        type: String,
        trim: true,
        require: true
    }
});

module.exports = mongoose.model('Catalogo', catalogoSchema);