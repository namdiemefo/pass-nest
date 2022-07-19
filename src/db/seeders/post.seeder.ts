import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "src/models/post.model";
import { Repository } from "typeorm";
import { posts } from "../data/post.data";

@Injectable()
export class PostSeederService {

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>

    /**
   * Seed all posts.
   *
   * @function
   */
    createPost() {

        this.postRepository.insert(posts);

    }

}