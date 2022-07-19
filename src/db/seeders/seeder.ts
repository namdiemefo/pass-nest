import { Inject, Injectable } from "@nestjs/common";
import { PostSeederService } from "./post.seeder";
import { UserSeederService } from "./user.seeder";

@Injectable()
export class Seeder {

    constructor(private readonly userSeederService: UserSeederService, private readonly postSeederService: PostSeederService) {}

   async seedUser() {

    await this.userSeederService.createUser();
    
   }

   async seedPosts() {
    await this.postSeederService.createPost()
   }

}