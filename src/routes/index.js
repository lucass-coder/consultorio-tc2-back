import express from "express";
import pacientes from "./pacientesRoutes.js";
import medicos from "./medicosRoutes.js";
import especialidades from "./especialidadesRoutes.js";
import consultas from "./consultasRoutes.js";
import auth from "./authRoutes.js";


const routes = (app) => {

    app.all('/*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Credentials", "true");
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, save-path, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, X-Access-Token, X-Key');
        if (req.method == 'OPTIONS') {
          res.status(200).end();
        } else {
          next();
        }
      });
    
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"});
    })

    app.use(
        express.json(),
        pacientes,
        medicos,
        especialidades,
        consultas,
        auth
        
    )
}

export default routes;