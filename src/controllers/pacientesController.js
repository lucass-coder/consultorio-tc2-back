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

        paciente.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Paciente.` })
            } else {
                res.status(201).send(paciente.toJSON());
            }
        })
    }

    // static listarAutorPorId = (req, res) => {
    //     const id = req.params.id;

    //     autores.findById(id, (err, autores) => {
    //         if (err) {
    //             res.status(400).send({ message: `${err.message} - Id do Autor não localizado` })
    //         } else {
    //             res.status(200).send(autores);
    //         }
    //     })
    // }

    // static cadastrarAutor = (req, res) => {
    //     let autor = new autores(req.body);

    //     autor.save((err) => {

    //         if (err) {
    //             res.status(500).send({ message: `${err.message} - Falha ao cadastrar Autor.` })
    //         } else {
    //             res.status(201).send(autor.toJSON());
    //         }
    //     })
    // }

    // static atualizarAutor = (req, res) => {
    //     const id = req.params.id;

    //     autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    //         if (!err) {
    //             res.status(200).send({ message: 'Autor atualizado com sucesso' })
    //         } else {
    //             res.status(500).send({ message: err.message })
    //         }
    //     })
    // }

    // static excluirAutor = (req, res) => {
    //     const { id } = req.params;
    //     autores.findByIdAndDelete(id, (err) => {
    //         if(!err) {
    //             res.status(200).send({ message: 'Autor removido com sucesso' })
    //         } else {
    //             res.status(500).send({ message: err.message })
    //         }
    //     })
    // }

}

export default PacientesController;