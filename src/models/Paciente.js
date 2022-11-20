import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema(
   {
    id: {type: String},
    nome: {type: String},
    dataNascimento: {type: String},
    dataCadastro: {type: String},
   }
);

const pacientes = mongoose.model('pacientes', pacienteSchema);

export default pacientes;

