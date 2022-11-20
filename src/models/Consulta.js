import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema(
   {
   id: {type: String},
   paciente: {type: mongoose.Schema.Types.ObjectId, ref: 'pacientes', required: true},
   medico: {type: mongoose.Schema.Types.ObjectId, ref: 'medicos', required: true},
   data: {type: String},
   }
);

const consultas = mongoose.model('consultas', consultaSchema);

export default consultas;
