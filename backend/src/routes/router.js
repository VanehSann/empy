import { Router } from "express";
import wallet from "./wallet.js";

const router = Router();

router.use("/", wallet);

export default router;
