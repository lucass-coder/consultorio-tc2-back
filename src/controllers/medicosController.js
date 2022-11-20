import medicos from "../models/Medico.js";

class MedicosController {

    static listarMedicos = (req, res) => {
        medicos.find((err, medicos) => {
            res.status(200).json(medicos);

        })
    }

    static cadastrarMedico = (req, res) => {

        const hoje = new Date();
        const dia = hoje.getDate().toString().padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const ano = hoje.getFullYear();
        const hora = hoje.getHours();
        const minutos = hoje.getMinutes();
        const dataAtual = `${dia}-${mes}-${ano} as ${hora}:${minutos}`;
        
        console.log(dataAtual);

        let medico = new medicos();
        medico.nome = req.body['nome'];
        medico.idEspecialidade = req.body['idEspecialidade'];
        medico.dataCadastro = dataAtual;

        medico.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Paciente.` })
            } else {
                res.status(201).send(medico.toJSON());
            }
        })
    }

    static excluirMedico = (req, res) => {
        const { id } = req.params;
        medicos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Paciente removido com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

     static atualizarMedico = (req, res) => {

        let medico = new medicos();
        medico.id = req.params.id
        medico.nome = req.params.nome
        medico.idEspecialidade = req.params.idEspecialidade
            // const id = req.params.id;

             console.log(medico);
    
            medicos.findByIdAndUpdate(medico.id, {nome: medico.nome, idEspecialidade: medico.idEspecialidade}, (err) => {
                if (!err) {
                    res.status(200).send({ message: 'Paciente atualizado com sucesso' })
                } else {
                    res.status(500).send({ message: err.message })
                }
            })
        }
}

export default MedicosController;