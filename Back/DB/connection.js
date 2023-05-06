import mongoose from "mongoose";
try {
  await mongoose.connect(process.env.URI);
  console.log("Conectado a MongoDB 😎");
} catch (e) {
  console.log("Conexión fallida a MongoDB 😰");
}
