import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import pacientes from "./pacientesRoutes.js";

const routes = (app) => {

    app.all('/*', function (req, res, next) {
        // CORS headers
        res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
        res.header("Access-Control-Allow-Credentials", "true");
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        // Set custom headers for CORS
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
        livros,
        autores,
        pacientes,
        
    )
}

export default routes;