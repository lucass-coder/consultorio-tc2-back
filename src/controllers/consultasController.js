import consultas from "../models/Consulta.js";

class LivroController {

    static listarConsultas = (req, res) => {
        consultas.find()
        .populate('paciente')
        .populate('medico')
        .exec((err, consultasList) => {
            for(var i = 0; i < consultasList.length; i++){
                if(consultasList[i].paciente == null){
                    console.log(consultasList[i]._id.toString())
                    consultas.findByIdAndDelete(consultasList[i]._id.toString(), (err) => {
                        if(!err) {
                            console.log('Deu certo excluir')
                        } else {
                            console.log('Deu Ruim excluir')
                        }
                    })
                }
                if(consultasList[i].medico == null){
                    console.log(consultasList[i]._id.toString())
                    consultas.findByIdAndDelete(consultasList[i]._id.toString(), (err) => {
                        if(!err) {
                            console.log('Deu certo excluir')
                        } else {
                            console.log('Deu Ruim excluir')
                        }
                    })
                }
            }
            res.status(200).json(consultasList);
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
        console.log(id);
        console.log(req.params);
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