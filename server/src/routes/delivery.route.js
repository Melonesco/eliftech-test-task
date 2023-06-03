import express from "express";
import * as DeliveryController from "../controllers/DeliveryController.js";

const router = express.Router({ mergeParams: true });

router.get("/delivery", DeliveryController.getAllDeliveries);
router.post("/delivery", DeliveryController.createDelivery);

export default router;
