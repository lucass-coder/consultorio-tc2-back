import especialidades from "../models/Especialidade.js";

class EspecialidadesController {

    static listarEspecialidades = (req, res) => {
        especialidades.find((err, especialidades) => {
            res.status(200).json(especialidades);

        })
    }

}

export default EspecialidadesController;