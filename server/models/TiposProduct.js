const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tipoProductSchema = new Schema({
    tipo: {
        type: String,
        trim: true,
        require: true
    },
    cantidad: {
        type: Number,
        trim: true,
        require: true
    
        },
    especie: {
        type: String,
        trim: true,
        require: true
    }
});

module.exports = mongoose.model('TiposProduct', tipoProductSchema);