import mongoose from "mongoose";

const especialidadeSchema = new mongoose.Schema(
   {
   id: {type: String},
    idEspecialidade: {type: Number},
    nome: {type: String},
   }
);

const especialidades = mongoose.model('especialidades', especialidadeSchema);

export default especialidades;

