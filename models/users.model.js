const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Definir el esquema para el modelo de usuario
const usuarioSchema = new Schema(
  {
    tipo: {
      type: String,
      enum: ["persona", "empresa"],
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    documento: {
      type: String,
      required: true,
      unique: true, // Asumiendo que cada documento/NIT debe ser único
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// usuarioSchema.pre('save', (next) =>{
//     let usuario = this;
//     if (!usuario.isModified('password')) return next();
//     bcrypt.genSalt(10, (err, salt) =>{
//       if (err) return next(err);
//       bcrypt.hash(usuario.password, salt, (err, hash) =>{
//         if (err) return next(err);
//         usuario.password = hash;
//         next();
//       });
//     });
// });

// Crear el modelo de usuario utilizando el esquema definido
const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
