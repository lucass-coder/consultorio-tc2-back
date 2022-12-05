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
    res.status(200).send(html);
  })

  app.use(
    express.json(),
    pacientes,
    medicos,
    especialidades,
    consultas,
    auth

  );

  let html = `
  <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <title>Webservice Clínica Médica com autenticação JWT</title>
</head>

<body>
    <h1>Webservice de Clínica Médica </h1>
    <p>Este webservice JSON é semelhante ao que o professor usou como exemplo em PHP, porém fizemos em Node com Express e contém um sistema de exemplo de uma clínica médica, formada por <b>pacientes</b>,
        <b>médicos</b>, <b>especializações</b> e <b>consultas</b>. Para entrar, o usuário deve criar e fazer o login  para realizar qualquer operação no sistema. 
        <p> Ja avisamos que o backEnd não é nosso forte, mas até que saiu algo legal disso tudo</p>


        <p><b> A rota padrão é: <a href="https://consultorio-tc2-back.herokuapp.com"> https://consultorio-tc2-back.herokuapp.com </a> </b></p>
        

        <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <p><b> Na rota de CONSULTAS existe uma peculiaridade ja mapeada.</p>
        <p> Caso o médido ou paciente que tenham uma consulta marcada sejam excluidos e você liste as consultas, ficará um espaço a menos de inicio (não conseguimos tratar a tempo isso no front).</p>
        <p> Entretando se der um reload o paciente ja terá sumido. </p>
        <p> O back até tratou de excluir a consulta nesses casos, mas como não somos muito bom no back, não conseguimos devolver o json ja com a consulta deletada! =/ porém a consulta é deletada no momento após a consulta no banco </b> </p>
        <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

    </p>
    <h2>As rotas disponíveis são:</h2>
    <p><b>AUTH</b> - suporta as seguintes operações:</p>
    <ul>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/auth/register">/auth/register</a> - POST</b> - Adiciona um novo administrador. Requer parâmetros <i>login</i> e <i>senha</i>. O login deve ser
            único na aplicação (e não precisa ser um email!).</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/auth/login">/auth/login</a> - POST</b> - Usado para login. Requer os parâmetros <i>login</i> e <i>senha</i>. Retorna um json contendo
            um token JWT válido para 50 minutos de interação.</li>
    </ul>
    <p> <b>PACIENTES</b> - suporta as seguintes operações:</p>
    <ul>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/pacientes">/pacientes </a> - GET</b> - Retorna a lista de pacientes.</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/pacientes">/pacientes </a>- POST</b> - Adiciona um novo paciente. Requer parâmetros <i>nome</i> e <i>dataNascimento</i> (no formato
            YYYY-MM-DD).</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/pacientes/:id/:nome/:dataNascimento">/pacientes/:id/:nome/:dataNascimento</a> - PUT</b> - Edita um paciente. Requer parâmetros <i>id</i>, <i>nome</i> e <i>dataNascimento</i> (no formato
            YYYY-MM-DD).</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/pacientes/:id">/pacientes/:id </a> - DELETE</b> - Remove um paciente. Requer parâmetro <i>id</i> (do tipo GET).</li>
    </ul>
    <p> <b>MÉDICOS</b> - suporta as seguintes operações:</p>
    <ul>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/medicos">/medicos </a> - GET</b> - Retorna a lista de médicos.</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/medicos">/medicos </a>- POST</b> - Adiciona um novo médico. Requer parâmetros <i>nome</i> e <i>idEspecialidade</i>.</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/medicos/:id/:nome/:idEspecialidade">/medicos/:id/:nome/:dataNascimento </a> - PUT</b> - Edita um médico. Requer parâmetros <i>id</i>, <i>nome</i> e <i>idEspecialidade</i>.</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/medicos/:id">/medicos/:id </a> - DELETE</b> - Remove um médico. Requer parâmetro <i>id</i> (do tipo GET).</li>
    </ul>
    <p> <b>CONSULTAS</b> - suporta as seguintes operações:</p>
    <ul>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/consultas">/consultas </a> - GET</b> - Retorna a lista de consultas.</li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/consultas">/consultas </a> - POST</b> - Adiciona uma nova consulta. Requer parâmetros <i>idPaciente</i> e <i>idMedico</i> e
            <i>data</i> (no formato YYYY-MM-DD HH:mm).
        </li>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/consultas:id">/consultas </a> - DELETE</b> - Remove uma consulta. Requer parâmetro <i>id</i> (do tipo GET).</li>
    </ul>
    <p> <b> ESPECIALIDADES </b> - suporta as seguintes operações:</p>
    <ul>
        <li><b><a href="https://consultorio-tc2-back.herokuapp.com/especialidades">/especialidades </a> - get</b> - Retorna a lista de especialidades.</li>
    </ul>
</body>

</html>
        `;
}

export default routes;