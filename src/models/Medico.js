import mongoose from "mongoose";

const medicoSchema = new mongoose.Schema(
   {
    id: {type: String},
    nome: {type: String},
    dataCadastro: {type: String},
    idEspecialidade: {type: Number},
   }
);

const medicos = mongoose.model('medicos', medicoSchema);

export default medicos;

