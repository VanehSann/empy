import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  name: { type: String },
  code: { type: String },
  network: { type: String },
  assistant: { type: String },
}, { timestamps: false });

const Client = mongoose.model("Client", clientSchema);

export default Client;