import express from "express";
import EspecialidadesController from "../controllers/especialidadesController.js";

const router = express.Router();

router 
    .get("/especialidades", EspecialidadesController.listarEspecialidades)


export default router;