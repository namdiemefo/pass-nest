import { Inject, Injectable } from "@nestjs/common";
import { PostSeederService } from "./post.seeder";
import { UserSeederService } from "./user.seeder";
import { CategorySeederService } from "./category.seeder";

@Injectable()
export class Seeder {

    constructor(private readonly userSeederService: UserSeederService, private readonly postSeederService: PostSeederService, private readonly categorySeederService: CategorySeederService) {}

   async seedUser() {

    await this.userSeederService.createUser();
    
   }

   async seedPosts() {
    await this.postSeederService.createPost()
   }

   async seedCategory() {

    await this.categorySeederService.createCategory()
    
   }

}