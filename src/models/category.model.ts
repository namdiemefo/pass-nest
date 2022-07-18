import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./post.model";

@Entity({ name: "category" })
export class Category {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    category_name!: string;

}