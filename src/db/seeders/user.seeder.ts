import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.model";
import { Repository } from "typeorm";
import { users } from "../data/user.data";

@Injectable()
export class UserSeederService {

    @InjectRepository(User)
    private readonly userRepository: Repository<User>

    /**
   * Seed all users.
   *
   * @function
   */
    createUser() {

        this.userRepository.insert(users);

    }

}