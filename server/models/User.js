const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  nombre: { type: String, trim: true },
  nombreusuario: { type: String, trim: true, require: true },
  contraseña: { type: String, trim: true, require: true },
  correo: { type: String, trim: true, /*unique:true*/},
  role: { type: String, trim: true },
});

module.exports = model("User", userSchema);
