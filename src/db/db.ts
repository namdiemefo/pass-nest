import { User } from "../models/user.model"
import 'reflect-metadata';
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Post } from "src/models/post.model";
import { Category } from "src/models/category.model";

// export const PostgresDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     // username: "test",
//     // password: "test",
//     database: "ourpass",
//     entities: [
//         User
//     ],
//     synchronize: true,
// })

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: "localhost",
      port: 5432,
      database: "ourpass",
      // username: "test",
      // password: "test",
      entities: [
        User, Post, Category
      ],
      // migrations: ['dist/migrations/*.{ts,js}'],
      // migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize: true,
    };
  }
}