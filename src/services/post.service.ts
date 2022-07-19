import { PostRepository } from "src/repository/post.repository";
import { Post } from "src/models/post.model";
import { AppUtils } from "src/utils/app.utils";
import { Inject, Injectable } from "@nestjs/common";
import { CategoryRepository } from "src/repository/category.repository";
import { UserRepository } from "src/repository/user.repository";

@Injectable()
export class PostService {

    constructor(@Inject(PostRepository) private readonly postRepository: PostRepository, @Inject(CategoryRepository) private readonly categoryRepository: CategoryRepository, @Inject(UserRepository) private readonly userRepository: UserRepository) {}z

    savePost = async (req_body, id) : Promise<any>  => {

        const { title, body, category_id } = req_body;

        const user = await this.userRepository.getUser(id);
        const category = await this.categoryRepository.getCategory(category_id);

        let post = new Post();
        post.title = title;
        post.body = body;
        post.categories = [category];
        post.user_id = user;

        console.log(post)

        await this.postRepository.savePost(post)

        let response = AppUtils.appResponse(200, "Post created successfully", "Post");
        return response;
        

    }

    editPost = async (req_body, id) : Promise<any> => {

        const { title, body } = req_body;

        await this.postRepository.editPost(id, title, body);

        let response = AppUtils.appResponse(200, "This Post has been updated", "Success");
        return response;

    }

    getPost = async (id) : Promise<any> => {

        const post = await this.postRepository.getPost(id)

        let response = AppUtils.appResponseWithData(200, "Post returned", "Success", post);
        return response;  

    }

    deletePost = async (id) : Promise<any> => {

        await this.postRepository.deletePost(id)

        let response = AppUtils.appResponse(200, "Post deleted", "Success");
        return response;  

    }

    getPosts = async () : Promise<any> => {

        const posts = await this.postRepository.getPosts()

        let response = AppUtils.appResponseWithData(200, "Users returned", "Success", posts);
        return response;

        
    }



}
