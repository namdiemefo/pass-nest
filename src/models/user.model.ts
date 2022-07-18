import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./post.model";

@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    first_name!: string;

    @Column()
    last_name!: string

    @Column()
    password!: string;

    @Column()
    token!: string;

    @Column()
    reset_password_token!: string;

    @OneToMany(() => Post, (post) => post.user_id, { cascade: true } )
    post: Post[]

}