import express from "express";
import { requireSignin, isAuth, isAdmin } from "../controllers/auth.js";
import { userById, read, update } from "../controllers/user.js";

const router = express.Router();

// requireSingin: The user is logged in
// isAuth: The logged in use matches the current user
// isAdmin: 1-> admin, 0-> not admin

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);

router.param("userId", userById);

export default router;
