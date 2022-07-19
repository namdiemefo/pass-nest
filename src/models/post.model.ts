import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm";
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

    @ManyToMany(() => Category, (category) => category.id, {
        cascade: true,
    })
    @JoinTable()
    categories: Category[];

}