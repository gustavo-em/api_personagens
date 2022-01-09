import { getRepository, Repository } from "typeorm";
import { Personagens } from "../../../entities/Personagens";


interface IReturn{
    msg: string;
    dados: boolean | Personagens[];
}

export async function puxar_todos_personagens(): Promise<IReturn>{
    try {
        let repoPersonagens = getRepository(Personagens)
        let personagens = await repoPersonagens.find()

        return {msg: "Todos os personagens", dados: personagens}
    } catch(err){
        return {msg: "Houve um erro ao trazer os personagens", dados: false}
    }
}