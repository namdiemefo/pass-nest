import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from 'src/controllers/post.controller';
import { PostSeederService } from 'src/db/seeders/post.seeder';
import { Post } from 'src/models/post.model';
import { PostRepository } from 'src/repository/post.repository';
import { PostService } from 'src/services/post.service';
import { CategoryModule } from './category.module';
import { UserModule } from './user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UserModule, CategoryModule],
  controllers: [PostController],
  providers: [PostService, PostRepository, PostSeederService],
  exports: [PostSeederService, PostRepository]
})
export class PostModule {}
