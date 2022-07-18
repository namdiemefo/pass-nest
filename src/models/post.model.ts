import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.model";
import { Category } from "./category.model";

@Entity({ name: "post" })
export class Post {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    body!: string

    @ManyToOne(() => User, (user) => user.post)
    user_id!: User

    @ManyToOne(() => Category)
    categories: Category[];

}