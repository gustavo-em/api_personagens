import 'reflect-metadata'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CaracteristicasPersonagens } from "./CaracteristicasPersonagens";

@Entity('personagens')
export class Personagens {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @OneToMany(()=> CaracteristicasPersonagens, (car_per)=>car_per.personagem) 
    caracteristicas: CaracteristicasPersonagens[]

    @Column()
    nome: string
}