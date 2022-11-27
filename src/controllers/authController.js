import user from "../models/User.js";

class UserController {

    static registrar =  (req, res) => {

        let usuario = new user(req.body)
        
         usuario.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Usuário.` })
            } else {
                res.status(201).send(usuario.toJSON());
            }
        })

    }

}

export default UserController;