import mongoose from "mongoose";
import "dotenv/config";
import Client from "../models/clients.js";
import main from "../db/connect.js";

main();

const clientsSeed = [
  { name: "John", network: "Rede A", code: "AB30-1" },
  { name: "Emma", network: "Rede B", code: "CD45-2" },
  { name: "Michael", network: "Rede C", code: "EF12-3" },
  { name: "Sophia", network: "Rede D", code: "GH78-1" },
  { name: "William", network: "Rede E", code: "IJ90-2" },
  { name: "Olivia", network: "Rede F", code: "KL34-3" },
  { name: "James", network: "Rede G", code: "MN56-1" },
  { name: "Ava", network: "Rede H", code: "OP78-2" },
  { name: "Alexander", network: "Rede I", code: "QR90-3" },
  { name: "Isabella", network: "Rede J", code: "ST12-1" },
  { name: "Daniel", network: "Rede K", code: "UV34-2" },
  { name: "Sophie", network: "Rede L", code: "WX56-3" },
  { name: "Mason", network: "Rede M", code: "YZ78-1" },
  { name: "Amelia", network: "Rede N", code: "AB90-2" },
  { name: "Benjamin", network: "Rede O", code: "CD12-3" },
  { name: "Chloe", network: "Rede P", code: "EF34-1" },
  { name: "Ethan", network: "Rede Q", code: "GH56-2" },
  { name: "Mia", network: "Rede R", code: "IJ78-3" },
  { name: "Jacob", network: "Rede S", code: "KL90-1" },
  { name: "Emily", network: "Rede T", code: "MN12-2" },
  { name: "Charlotte", network: "Rede U", code: "OP34-3" },
  { name: "Liam", network: "Rede V", code: "QR56-1" },
  { name: "Aiden", network: "Rede W", code: "ST78-2" },
  { name: "Avery", network: "Rede X", code: "UV90-3" },
  { name: "Sofia", network: "Rede Y", code: "WX12-1" },
  { name: "Lucas", network: "Rede Z", code: "YZ34-2" }
];


async function seedClients() {
  try {
    await Client.deleteMany({});
    await Client.insertMany(clientsSeed);
    console.log("Dados de seed de clientes adicionados com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar dados de seed de clientes:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedClients();
