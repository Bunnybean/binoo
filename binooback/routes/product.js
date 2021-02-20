import express from "express";
import {
  create,
  productById,
  read,
  remove,
  update,
  list,
  photo,
} from "../controllers/product.js";

import { requireSignin, isAuth, isAdmin } from "../controllers/auth.js";
import { userById } from "../controllers/user.js";

const router = express.Router();

router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.put(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.get("/products", list);
router.get("/product/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

export default router;
