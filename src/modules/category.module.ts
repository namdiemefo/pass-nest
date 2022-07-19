import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from 'src/controllers/category.controller';
import { CategorySeederService } from 'src/db/seeders/category.seeder';
import { Category } from 'src/models/category.model';
import { CategoryRepository } from 'src/repository/category.repository';
import { CategoryService } from 'src/services/category.service';
import { UserModule } from './user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, CategorySeederService],
  exports: [CategorySeederService, CategoryRepository]
})
export class CategoryModule {}
