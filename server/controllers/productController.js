const multer = require("multer");
const multerConfig = require("../utils/multerConfig");

const Customer = require("../models/Product");

const upload = multer(multerConfig).single("image");

exports.fileUpload = (req, res, next) => {
  upload(req, res, function(error) {
      if(error){
          res.json({message: error});
      }
      return next();
  });
};

// crear producto
exports.create = async (req, res) => {
  const catalogo = new Customer(req.body);

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

// listar producto

exports.index = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.json(customers);
  } catch (error) {
    console.log(error);
    res.send(error);
    next();
  }
};

// producto por id

exports.show = async (req, res, next) => {
  try {
      const customer = await Customer.findById(req.params.id);
      if(!customer){
          res.status(404).json({
              message: "El producto no existe!"
          });    
      }
      res.json(customer);
  } catch (error) {
      res.status(400).json({
          message: 'Error en la consulta'
      });
  }
};

// actualizar prodcuto

exports.update = async (req, res, next) => {
  try {
    let newCustomer = req.body;
    if(req.file && req.file.filename){
        newCustomer.image = req.file.filename;
    }else{
        const customer = await Customer.findById(req.params.id);
        newCustomer.image = customer.image;
    }

    const customerUpdated = await Customer.findOneAndUpdate(
      { _id: req.params.id },
      newCustomer,
      { new: true }
    );

    res.json({
      message: "Producto actualizado con exito",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al procesar la consulta",
    });
  }
};

// Eliminar producto

exports.delete = async (req, res, next) => {
  try {
    await Customer.findOneAndDelete({
      _id: req.params.id,
    });

    res.json({
      message: "Producto borrado con exito!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al procesar la consulta",
    });
  }
};
