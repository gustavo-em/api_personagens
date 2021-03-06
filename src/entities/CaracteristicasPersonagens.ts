import 'reflect-metadata'
import { Personagens } from "./Personagens";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('caracteristicas_personagens')
export class CaracteristicasPersonagens {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(()=> Personagens, (personagem)=> personagem.caracteristicas)
    personagem: Personagens

    @Column()
    nome: string
    
    @Column()
    descricao: string
}