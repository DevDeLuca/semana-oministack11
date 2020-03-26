const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);
/*
    Métodos HTTP:
    GET: Buscar ou listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/
/**
 * Tipos de parâmetros:
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos "/:"
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * ===== Banco de Dados ======
 * SQL: MySql, SQLite, PostgreSQL, Oracle,etc...(Relacionais)
 * NoSQL: MongoDB, CouchDB, etc... (Não Relacionais)
 */
/**
 * Configuração do banco de dados
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()..., Utilizaremos: npm install knex e npm install sqlite3
 */

