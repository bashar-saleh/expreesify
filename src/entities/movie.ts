import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity()
export class Movie{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}