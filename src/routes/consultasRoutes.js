import express from "express";
import ConsultasController from "../controllers/consultasController.js";

const router = express.Router();

router 
    .get("/consultas", ConsultasController.listarConsultas)


export default router;