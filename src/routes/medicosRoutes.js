import express from "express";
import MedicosController from "../controllers/medicosController.js";

const router = express.Router();

router 
    .get("/medicos", MedicosController.listarMedicos)
    .post("/medicos", MedicosController.cadastrarMedico)
    .delete("/medicos/:id", MedicosController.excluirMedico)
    .put("/medicos/:id/:nome/:dataNascimento", MedicosController.atualizarMedico)


export default router;