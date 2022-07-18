import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// import { Subject } from "./subject.entity";

@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    first_name!: string;

    @Column()
    last_name!: string

    @Column()
    password!: string

    // @OneToMany(() => Subject, (subject) => subject.class, { cascade: true } )
    // subject: Subject[]

}