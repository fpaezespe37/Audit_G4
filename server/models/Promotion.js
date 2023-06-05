const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    fecha: {
        type: String,
        trim: true,
        require: true
    },
    descuento: {
        type: String,
        trim: true,
        require: true
    },
    tiempo: {
        type: String,
        trim: true,
        require: true
    },
    descripcion: {
        type: String,
        trim: true,
        require: true
    }
});

module.exports = mongoose.model('Promotion', promotionSchema);