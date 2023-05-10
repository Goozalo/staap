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
  const { name, lastname, email, password, data } = req.body;

  try {
    const user = new userdb({ name, lastname, email, password, data });
    console.log(user);
    await user.save();

    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
export const add = async (req, res) => {
  const { id } = req.params;
  const { newValue } = req.body;

  try {
    const data = await userdb.findById(id);
    console.log(data);
    data.data = [...data.data, newValue];
    await data.save();
    console.log(data);

    res.send("Parametro guardado");
  } catch (error) {
    res.send("No se pudo crear el nuevo parametro" + " " + error);
  }
};
