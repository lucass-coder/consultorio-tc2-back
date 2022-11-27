import users from "../models/User.js";
import jwt from "jsonwebtoken";

const SECRET = 'tools';

class UserController {

    static register = (req, res) => {

        let usuario = new users();
        usuario.login = req.body['login']
        usuario.senha = req.body['senha']

        const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300000 });

        users.findOne({ login: usuario.login })
            .populate('login', 'senha')
            .exec((err, login) => {
                if (login && login.login === usuario.login) {
                    res.status(401).send({ "mensagem": "Usuario ja existente" })
                } else {
                    usuario.save((err) => {
                        if (err) {
                            res.status(500).send({ message: `${err.message} - Falha ao cadastrar Usuário.` })
                        } else {
                            res.status(200).send({ "token": token, "login": usuario.login, "senha": usuario.senha });
                        }
                    })
                }
            })

    }

    static login = (req, res) => {

        let usuario = new users();
        usuario.login = req.body['login']
        usuario.senha = req.body['senha']

        const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300000 });
        users.findOne({ login: usuario.login, senha: usuario.senha })
            .populate('login', 'senha')
            .exec((err, login) => {
                if (login && login.login === usuario.login && login.senha === usuario.senha) {
                    res.status(200).json({ "token": token, "status": "Logado" });
                } else {
                    res.status(500).send({ message: `Usuário ou senha Inválido.` })
                }
            })
    }

}

export default UserController;