const Promotion = require('../models/Promotion');

// crear promocion

exports.create = async (req, res) => {
    const promotion = new Promotion(req.body);

    try {
        await promotion.save();
        res.status(201).json({
            message: "Promocion creado con exito!"
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });  
    }
}

// listar promocion

exports.index = async (req, res) => {
    try {
        const promotion = await Promotion.find({});
        res.json(promotion); 
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};


// promocion por id

exports.show = async (req, res, next) => {
    try {
        const promotion = await Promotion.findById(req.params.id);
        if(!promotion){
            res.status(404).json({
                message: "No existe promocion con este id"
            });    
        }
        res.json(promotion);
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};

// actualizar promocion

exports.update = async (req, res, next) => {
    try {
        const promotion = await Promotion.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );

        res.json({
            message: 'Promocion actualizada con exito'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};

// eliminar promocion

exports.delete = async (req, res, next) => {
    try {
        await Promotion.findOneAndDelete({
            _id: req.params.id
        });

        res.json({
            message: 'Promocion eliminada con exito'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};
