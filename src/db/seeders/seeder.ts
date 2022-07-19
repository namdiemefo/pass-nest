import { Inject, Injectable } from "@nestjs/common";
import { UserSeederService } from "./user.seeder";

@Injectable()
export class Seeder {

    constructor(private readonly userSeederService: UserSeederService) {}

   async seed() {

    await this.userSeederService.createUser();
    
   }

}