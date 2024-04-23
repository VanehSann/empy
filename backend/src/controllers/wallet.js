import Assistant from "../models/assistants.js";
import Client from "../models/clients.js";

const walletControllers = {
  getAllAssistants: async (_req, res, next) => {
    return await Assistant.find()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return next({
          statusCode: 400,
          message: "Database error. Por favor, tente novamente mais tarde.",
          error: error.message,
        });
      });
  },
  getMyClients: async (req, res, next) => {
    const { id } = req.params;
    return await Client.find({ assistant: id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return next({
          statusCode: 400,
          message: "Database error. Por favor, tente novamente mais tarde.",
          error: error.message,
        });
      });
  },
  getNewClients: async (req, res, next) => {
    return await Client.find({ assistant: { $exists: false } })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return next({
          statusCode: 400,
          message: "Database error. Por favor, tente novamente mais tarde.",
          error: error.message,
        });
      });
  },
  createClient: async (req, res, next) => {
    const data = req.body;
    return await Client.create(data)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return next({
          statusCode: 400,
          message: "Database error. Por favor, tente novamente mais tarde.",
          error: error.message,
        });
      });
  },
  createAssistant: async (req, res, next) => {
    const data = req.body;
    return await Assistant.create(data)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return next({
          statusCode: 400,
          message: "Database error. Por favor, tente novamente mais tarde.",
          error: error.message,
        });
      });
  },
  addClientAssistant: async (req, res, next) => {
    const clientAssistants = req.body;

    try {
      await Promise.all(clientAssistants.map(async (item) => {
        const { clientId, assistantId } = item;
        const client = await Client.findById(clientId);
        if (client) {
          client.assistant = assistantId;
          await client.save();
        }
      }));

      return res.status(200).json({ message: "Assistentes adicionados aos clientes com sucesso" });
    } catch (error) {
      console.log(error);
      return next({
        statusCode: 500,
        message: "Erro no servidor. Por favor, tente novamente mais tarde.",
        error: error.message,
      });
    }
  },
  removeClientAssistant: async (req, res, next) => {
    const clientIds = req.body;

    try {
      await Promise.all(clientIds.map(async (clientId) => {
        const client = await Client.findById(clientId.clientId);
        if (client) {
          client.assistant = undefined;
          await client.save();
        }
      }));

      return res.status(200).json({ message: "Assistentes removidos dos clientes com sucesso" });
    } catch (error) {
      console.log(error);
      return next({
        statusCode: 500,
        message: "Erro no servidor. Por favor, tente novamente mais tarde.",
        error: error.message,
      });
    }
  }


};

export default walletControllers;
