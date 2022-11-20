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

    // static listarLivroPorId = (req, res) => {
    //     const id = req.params.id;

    //     consultas.findById(id)
    //     .populate('autor', 'nome')
    //     .exec((err, consultas) => {
    //         if (err) {
    //             res.status(400).send({ message: `${err.message} - Id do livro não localizado` })
    //         } else {
    //             res.status(200).send(consultas);
    //         }
    //     })
    // }

    // static cadastrarLivro = (req, res) => {
    //     let livro = new consultas(req.body);

    //     livro.save((err) => {

    //         if (err) {
    //             res.status(500).send({ message: `${err.message} - Falha ao cadastrar livro.` })
    //         } else {
    //             res.status(201).send(livro.toJSON());
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