import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "src/models/post.model";
import { Repository } from "typeorm";

@Injectable()
export class PostRepository {

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>;

    savePost = async (user: Post) => {

        await this.postRepository.save(user);

    }

    getPosts = async () : Promise<Post[]> => {

        return await this.postRepository.find({relations: { user_id: true }});
        
    }

    getPost = async (id) : Promise<Post> => {

        return await this.postRepository.findOne({ where : { id: id }, relations: { user_id: true } });
        
    }

    deletePost = async (id: number)  => {
        
        await this.postRepository.delete(id);

    }

    editPost = async (id: number, title, body)  => {

        await this.postRepository.update(id, { title: title, body: body })

    }

}