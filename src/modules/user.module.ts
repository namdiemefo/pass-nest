import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user.controller';
import { UserSeederService } from 'src/db/seeders/user.seeder';
import { User } from 'src/models/user.model';
import { UserRepository } from 'src/repository/user.repository';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserSeederService],
  exports: [UserSeederService, UserRepository]
})
export class UserModule {}
