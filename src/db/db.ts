import { DataSource } from "typeorm"
import { User } from "../models/user.model"
import 'reflect-metadata';
// import { Teacher } from "../models/teacher.entity";
// import { Class } from "../models/class.entity";
// import { Subject } from "../models/subject.entity";

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    // username: "test",
    // password: "test",
    database: "todo",
    entities: [
        User
    ],
    synchronize: true,
})


export default PostgresDataSource;