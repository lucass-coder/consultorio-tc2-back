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

        console.log(req.body)

        consulta.paciente = req.body['paciente'];
        consulta.medico = req.body['medico'];
        consulta.data = req.body['data'];

        consulta.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Consulta.` })
            } else {
                res.status(201).send(consulta.toJSON());
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

    // static cadastrarConsulta = (req, res) => {
    //     let consulta = new consultas(req.body);

    //     consulta.save((err) => {

    //         if (err) {
    //             res.status(500).send({ message: `${err.message} - Falha ao cadastrar consulta.` })
    //         } else {
    //             res.status(201).send(consulta.toJSON());
    //         }
    //     })
    // }

    // static atualizarLivro = (req, res) => {
    //     const id = req.params.id;

    //     consultas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    //         if (!err) {
    //             res.status(200).send({ message: 'Livro atualizado com sucesso' })
    //         } else {
    //             res.status(500).send({ message: err.message })
    //         }
    //     })
    // }

    // static excluirLivro = (req, res) => {
    //     const { id } = req.params;
    //     consultas.findByIdAndDelete(id, (err) => {
    //         if(!err) {
    //             res.status(200).send({ message: 'Livro removido com sucesso' })
    //         } else {
    //             res.status(500).send({ message: err.message })
    //         }
    //     })
    // }

    // static listarLivroPorEditora = (req, res) => {
    //     const editora = req.query.editora;

    //     consultas.find({'editora': editora}, {}, (err, consultas) => {
    //         res.status(200).send(consultas);
    //     })
    // }

}

export default LivroController