import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from "src/db/db";
import { Seeder } from 'src/db/seeders/seeder';
import { AuthenticationMiddleware } from 'src/middlewares/jwt.middleware';
import { CategoryModule } from './category.module';
import { PostModule } from './post.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    PostModule,
    CategoryModule
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

      consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('/api/v1/category')
      
      

  }

}
