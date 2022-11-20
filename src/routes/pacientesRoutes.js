import express from "express";
import PacientesController from "../controllers/pacientesController.js";

const router = express.Router();

router 
    .get("/pacientes", PacientesController.listarPacientes)
    // .get("/autores/:id", PacientesController.listarAutorPorId)
    // .post("/autores", PacientesController.cadastrarAutor)
    // .put("/autores/:id", PacientesController.atualizarAutor)
    // .delete("/autores/:id", PacientesController.excluirAutor)


export default router;