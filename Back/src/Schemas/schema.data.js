import { Schema, model } from "mongoose";

const dataDB = new Schema({
  user: {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "userdb",
      required: true,
    },
    data: {
      date: Date,
    },
  },
});

export const datadb = model("datadb", dataDB);
