import express from "express";
import ConsultasController from "../controllers/consultasController.js";

const router = express.Router();

router 
    .get("/consultas", ConsultasController.listarConsultas)
    .post("/consultas", ConsultasController.cadastrarConsulta)
    .delete("/consultas/:id", ConsultasController.excluirConsulta)


export default router;