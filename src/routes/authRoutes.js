
import express from "express";
import UserController from "../controllers/authController.js";


const router = express.Router();

router 
    .post("/auth/register", UserController.register)
    .post("/auth/login", UserController.login);


export default router;
