const User = require('../models/User');

// crear usuario

exports.create = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).json({
            message: "Usuario creado con exito!"
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });  
    }
}

// listar usuario

exports.index = async (req, res) => {
    try {
        const user = await User.find({});
        res.json(user); 
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};


// usuario por id

exports.show = async (req, res, next) => {
    try {
        const {username} = req.params
        const user = await User.find({nombreusuario: username});
        if(!user){
            res.status(404).json({
                message: "El usuario no existe con ese id!"
            });    
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};

// actualizar usuario

exports.update = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );

        res.json({
            message: 'usuario actualizado con exito'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};

// Eliminar usuario

exports.delete = async (req, res, next) => {
    try {
        await User.findOneAndDelete({
            _id: req.params.id
        });

        res.json({
            message: 'eliminar cliente'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en el proceso'
        });
    }
};
