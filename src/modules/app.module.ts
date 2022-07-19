import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NextFunction } from 'express';
import { TypeOrmConfigService } from "src/db/db";
import { Seeder } from 'src/db/seeders/seeder';
import { AuthenticationMiddleware } from 'src/middlewares/jwt.middleware';
import { PostModule } from './post.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    PostModule
  ],
  providers: [Seeder]
})

export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {

    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('/api/v1/user')

      consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('/api/v1/post')
      
      

  }

}
