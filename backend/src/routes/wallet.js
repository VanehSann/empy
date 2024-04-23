import { Router } from "express";
import walletControllers from "../controllers/wallet.js";

const router = Router();

router.get("/assistants/all", (req, res, next) =>
  walletControllers.getAllAssistants(req, res, next)
);

router.get("/clients/mine/assistant/:id", (req, res, next) =>
  walletControllers.getMyClients(req, res, next)
);

router.get("/clients/new", (req, res, next) =>
  walletControllers.getNewClients(req, res, next)
);

router.post("/clients/new/add", (req, res, next) =>
  walletControllers.createClient(req, res, next)
);

router.post("/assistants/add", (req, res, next) =>
  walletControllers.createAssistant(req, res, next)
);

router.put("/clients/update/assistants", (req, res, next) =>
  walletControllers.addClientAssistant(req, res, next)
);

router.put("/clients/remove/assistants", (req, res, next) =>
  walletControllers.removeClientAssistant(req, res, next)
);

export default router;
