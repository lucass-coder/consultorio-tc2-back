import express from "express";
import UserController from "../controllers/authController.js";

const router = express.Router();

router 
    .post("/auth/register", UserController.registrar)
    // .post("/consultas", ConsultasController.cadastrarConsulta)
    // .delete("/consultas/:id", ConsultasController.excluirConsulta)


export default router;