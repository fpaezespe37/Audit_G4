const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repositorioSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        require: true
    },
    foto: {
        type: String,
        trim: true,
        require: true
    },
    descripcion:{
        type: String,
        trim: true,
        require: true 
    },
    precio:{
        type: Number,
        trim: true,
        require: true
    },
    promocion:{
        type: String,
        trim: true,
        require: true  
    }
});

module.exports = mongoose.model('Repositorio', repositorioSchema);