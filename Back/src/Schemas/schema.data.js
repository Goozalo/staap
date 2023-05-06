import { Schema, SchemaType, model } from "mongoose";

const dataDB = new Schema({
  date: Date,
  data: {
    brazo: { type: Number },
    pecho: { type: Number },
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "userdb",
    required: true,
  },
});

export const datadb = model("datadb", dataDB);
