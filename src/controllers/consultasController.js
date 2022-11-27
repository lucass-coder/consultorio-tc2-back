import consultas from "../models/Consulta.js";

class LivroController {

    static listarConsultas = (req, res) => {
        consultas.find()
        .populate('paciente')
        .populate('medico')
        .exec((err, consultas) => {
            res.status(200).json(consultas);
        })
    }


    static cadastrarConsulta = (req, res) => {
        

        let consulta = new consultas();

        consulta.paciente = req.body['paciente'];
        consulta.medico = req.body['medico'];
        consulta.data = req.body['data'];

        console.log(req.body['paciente'])
        console.log(req.body['medico'])

        consulta.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Consulta.` })
            } else {
                res.status(201).send({ message: 'Consulta criada com sucesso' });
            }
        })
    }

    static excluirConsulta = (req, res) => {
        const { id } = req.params;
        consultas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Consulta removida com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

}

export default LivroController