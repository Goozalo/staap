import { userdb } from "../Schemas/schema.users.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userdb.findOne({ email });

    if (user.password == password) {
      res.send("Login exitoso");
    } else {
      throw new error();
    }
  } catch (error) {
    res.send("Usuario o contraseña incorrecta");
  }
};
export const register = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  try {
    const user = new userdb({ name, lastname, email, password });

    await user.save();

    res.send("Usuario registrado");
  } catch (error) {
    res.send(error);
  }
};
