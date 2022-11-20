import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema(
   {
    id: {type: String},
    nome: {type: String},
    // autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    dataNascimento: {type: String},
    dataCadastro: {type: String},
   }
);

const pacientes = mongoose.model('pacientes', pacienteSchema);

export default pacientes;

