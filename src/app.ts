
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors'
import 'reflect-metadata'
const app = express();

import { createConnections } from "typeorm";
import { router } from "./routes";

//Criar conexao banco 


createConnections().then(() => {





    //Middlewares
    app.use(bodyParser.json())
    app.use(cors())
    //app.use(express.json());


    //Rotas

    //import { ConexaoTypeOrm } from "./helpers/conexaoTypeOrm";
    app.use(router)


    //Rotas vue
    // app.use('/', express.static(__dirname + '/../c_front'));
    // app.get(/.*/, (req, res) => res.sendFile(__dirname + '/../c_front/index.html'))

    app.listen('3333', () => console.log('Server is running'))
})