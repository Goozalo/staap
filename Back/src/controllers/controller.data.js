import { datadb } from "../Schemas/schema.data.js";

export const readData = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await datadb.find({ userId: id });
    res.send(data);
  } catch (error) {
    res.send("No se pudieron leer los datos" + " " + error);
  }
};
export const createData = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const arr = Object.entries(body);
  console.log(arr[1]);
  try {
    const infoDB = new datadb({
      user: { data: { date: arr[0], grasa: arr[1] }, userId: id },
    });
    console.log(infoDB);
    await infoDB.save();
    res.send(infoDB);
  } catch (error) {
    res.send("No se creó el dato" + " " + error);
  }
};
export const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await datadb.findById(id);
    await data.deleteOne();
    res.send("Información eliminada");
  } catch (error) {
    res.send("No se pudo eliminar la información");
  }
};
export const deleteAllData = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await datadb.findById(id);
    await data.deleteOne();
    res.send("Información eliminada");
  } catch (error) {
    res.send("No se pudo eliminar la información");
  }
};
export const addNewData = async (req, res) => {
  const { data } = req.body;
  const { id } = req.params;

  try {
    const newParam = await datadb.find({ user: { userId: id } });
    console.log(newParam);
    // insertOne({
    //   data,
    // });
    res.send("Parametro creado");
  } catch (error) {
    res.send("No se pudo crear el parametro" + " " + error);
  }
};
