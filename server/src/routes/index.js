import express from "express";
import storeRouter from "./store.route.js";
import deliveryRouter from "./delivery.route.js";

const router = express.Router();

router.use("/", storeRouter);
router.use("/", deliveryRouter);

export default router;
