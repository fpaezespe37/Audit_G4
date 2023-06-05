const multer = require('multer');
const multerConfig = require('../utils/multerConfig');

const Catalogo = require('../models/Catalogo');

const upload = multer(multerConfig).single('image');

exports.fileUpload = (req, res, next) => {
    upload(req, res, function(error) {
        if(error){
            res.json({message: error});
        }
        return next();
    });
};

// crear catalogo
exports.create = async (req, res) => {
    const catalogo = new Catalogo(req.body);

    try {
        if (req.file && req.file.filename) {
            catalogo.image = req.file.filename;
        }
        await catalogo.save();
        res.status(201).json({
            message: "Catalogo creado con exito!"
        });
    } catch (error) {
        
            res.status(400).json({
                message: "Error en procesar el catalogo!"
            });
        }   
};

// listar catalogo
exports.index = async (req, res) => {
    try {
        const catalogo = await Catalogo.find({});
        res.json(catalogo); 
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};


// atualizar catalogo
exports.update = async (req, res, next) => {
    try {
        let newCatalogo = req.body;

        if (req.file && req.file.filename) {
            newCatalogo.image = req.file.filename;
        } else {
            const catalogo = await Catalogo.findById(req.params.id);
            newCatalogo.image = catalogo.image;
        }

        const catalogoUpdated = await Catalogo.findOneAndUpdate(
            {_id: req.params.id},
            newCatalogo,
            {new: true}
        );

        res.json({
            message: 'Catalogo actualizado con exito'
        });
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                message: `Catalogo no existe con este id: ${req.body.id}`
            });
        } else {
            res.status(400).json({
                message: "Error al procesar la consulta"
            });
        }
    }
};

// Eliminar un catalogo
exports.delete = async (req, res, next) => {
    try {
        await Catalogo.findOneAndDelete({
            _id: req.params.id
        });

        res.json({
            message: 'Catalogo borrado con exito'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la consulta'
        });
    }
};

exports.search = async (req, res, next) => {
    try {
        const catalogo = await Catalogo.find({
            name: new RegExp(req.params.query, 'i')
        });
        res.json(catalogo);        
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la consulta'
        });
    }
}