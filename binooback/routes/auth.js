import express from "express";
import { signup, signin, signout, requireSignin } from "../controllers/auth.js";
import { userSignupValidator } from "../validator/index.js";

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

export default router;
