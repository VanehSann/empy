import mongoose, { Schema } from "mongoose";

const assistantSchema = new Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
}, { timestamps: false });

const Assistant = mongoose.model("Assistant", assistantSchema);

export default Assistant;