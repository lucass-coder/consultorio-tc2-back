import express from "express";
import PacientesController from "../controllers/pacientesController.js";

const router = express.Router();

router 
    .get("/pacientes", PacientesController.listarPacientes)
    .post("/pacientes", PacientesController.cadastrarPaciente)
    .delete("/pacientes/:id", PacientesController.excluirPaciente)
    .put("/pacientes/:id/:nome/:dataNascimento", PacientesController.atualizarPaciente)


export default router;