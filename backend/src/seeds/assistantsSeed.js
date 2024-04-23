import mongoose from "mongoose";
import "dotenv/config";
import Assistant from "../models/assistants.js";
import main from "../db/connect.js";

main();

const assistantsSeed = [
  { name: "João", email: "joao@email.com", phone: "5511999999999" },
  { name: "Maria", email: "maria@email.com", phone: "5511999999999" },
];

async function seedAssistants() {
  try {
    await Assistant.deleteMany({});
    await Assistant.insertMany(assistantsSeed);
    console.log("Dados de seed de assistantes adicionados com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar dados de seed de assistentes:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedAssistants();
