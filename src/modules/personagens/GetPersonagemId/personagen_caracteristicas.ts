import { getRepository } from "typeorm";
import { Personagens } from "../../../entities/Personagens";

interface IRequest{
    msg: string;
    dados: boolean | Personagens[]
}

export async function personagen_caracteristicas(id: string): Promise<IRequest>{
    try{
        let repoPersonagens = getRepository(Personagens)
        let personagens_carac = await repoPersonagens.find({
            where: {
                id: id
            },
            relations: ['caracteristicas']
        }) 

        return {
            msg: "Personagens com caracteristicas",
            dados: personagens_carac
        }
    } catch(err){
        return {
            msg: err, 
            dados: false 
        }
    }
}