import { Schema, model } from "mongoose";

const userDB = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

export const userdb = model("userdb", userDB);
