const Repositorio = require('../models/Repositorio');

// crear promocion

exports.create = async (req, res) => {
    const repositorio = new Repositorio(req.body);

    try {
        await repositorio.save();
        res.status(201).json({
            message: "Repositorio creado con exito!"
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
        const repositorio = await Repositorio.find({});
        res.json(repositorio); 
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};


// promocion por id

exports.show = async (req, res, next) => {
    try {
        const repositorio = await Repositorio.findById(req.params.id);
        if(!repositorio){
            res.status(404).json({
                message: "No existe promocion con este id"
            });    
        }
        res.json(repositorio);
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};

// actualizar promocion

exports.update = async (req, res, next) => {
    try {
        const repositorio = await Repositorio.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );

        res.json({
            message: 'Repositorio actualizado con exito'
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
        await Repositorio.findOneAndDelete({
            _id: req.params.id
        });

        res.json({
            message: 'Repositorio eliminada con exito'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};
