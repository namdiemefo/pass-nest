import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from "src/db/db";
import { Seeder } from 'src/db/seeders/seeder';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule
  ],
  providers: [Seeder]
})
export class AppModule {}
