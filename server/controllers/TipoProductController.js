const Tipo = require('../models/TiposProduct');

// crear producto

exports.create = async (req, res) => {
    const tipo = new Tipo(req.body);

    try {
        await tipo.save();
        res.status(201).json({
            message: "Producto creado con exito!"
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en procesar el producto!'
        });  
    }
}

// listar producto

exports.index = async (req, res) => {
    try {
        const tipo = await Tipo.find({});
        res.json(tipo); 
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};


// producto por id

exports.show = async (req, res, next) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        if(!tipo){
            res.status(404).json({
                message: "El producto no existe!"
            });    
        }
        res.json(tipo);
    } catch (error) {
        res.status(400).json({
            message: 'Error en la consulta'
        });
    }
};

// actualizar prodcuto

exports.update = async (req, res, next) => {
    try {
        const tipo = await Tipo.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );

        res.json({
            message: 'Producto actualizado con exito'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la consulta'
        });
    }
};

// Eliminar producto

exports.delete = async (req, res, next) => {
    try {
        await Tipo.findOneAndDelete({
            _id: req.params.id
        });

        res.json({
            message: 'Producto borrado con exito!'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la consulta'
        });
    }
};
