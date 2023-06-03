import express from "express";
import * as StoreController from "../controllers/StoreController.js";

const router = express.Router({ mergeParams: true });

router.get("/stores", StoreController.getAllStores);
router.get("/stores/:id", StoreController.getStoreById);

export default router;
