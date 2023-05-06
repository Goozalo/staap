import { datadb } from "../Schemas/schema.data.js";

export const readData = async (req, res) => {
  try {
    const data = await datadb.find();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send("No se pudieron leer los datos" + " " + error);
  }
};
export const createData = async (req, res) => {
  const { date, brazo, pecho } = req.body;
  console.log(date, brazo, pecho);
  try {
    const infoDB = new datadb({ date, data: { brazo, pecho } });
    console.log(infoDB);
    await infoDB.save();
    res.send(infoDB);
  } catch (error) {
    res.send("No se creó el dato" + " " + error);
  }
};
