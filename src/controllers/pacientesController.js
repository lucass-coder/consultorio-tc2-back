import pacientes from "../models/Paciente.js";

class PacientesController {

    static listarPacientes = (req, res) => {
        pacientes.find((err, pacientes) => {
            res.status(200).json(pacientes);

        })
    }

    static cadastrarPaciente = (req, res) => {

        const hoje = new Date();
        const dia = hoje.getDate().toString().padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const ano = hoje.getFullYear();
        const hora = hoje.getHours();
        const minutos = hoje.getMinutes();
        const dataAtual = `${dia}-${mes}-${ano} as ${hora}:${minutos}`;
        
        console.log(dataAtual);

        let paciente = new pacientes();
        paciente.nome = req.body['nome'];
        paciente.dataNascimento = req.body['dataNascimento'];
        paciente.dataCadastro = dataAtual;

        paciente.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Paciente.` })
            } else {
                res.status(201).send(paciente.toJSON());
            }
        })
    }

    static excluirPaciente = (req, res) => {
        const { id } = req.params;
        pacientes.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Paciente removido com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

     static atualizarPaciente = (req, res) => {

        let paciente = new pacientes();
        paciente.id = req.params.id
        paciente.nome = req.params.nome
        paciente.dataNascimento = req.params.dataNascimento
            // const id = req.params.id;

             console.log(paciente);
    
            pacientes.findByIdAndUpdate(paciente.id, {nome: paciente.nome, dataNascimento: paciente.dataNascimento}, (err) => {
                if (!err) {
                    res.status(200).send({ message: 'Paciente atualizado com sucesso' })
                } else {
                    res.status(500).send({ message: err.message })
                }
            })
        }
}

export default PacientesController;