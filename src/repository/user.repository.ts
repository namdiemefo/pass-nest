import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.model";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {

    @InjectRepository(User)
    private readonly userRepository: Repository<User>;

    saveUser = async (user: User) => {

        await this.userRepository.save(user);

    }

    getUsers = async () : Promise<User[]> => {

        return await this.userRepository.find();
        
    }

    getUser = async (id) : Promise<User> => {

        return await this.userRepository.findOne({ where : { id: id } });
        
    }

    getUserIfEmailExists = async (email) : Promise<User> => {

        return await this.userRepository.findOne({ where: { email: email } });
        
    }

    deleteUser = async (id: number)  => {
        
        await this.userRepository.delete(id);

    }

    editUser = async (id: number, first_name, last_name)  => {

        await this.userRepository.update(id, { first_name: first_name, last_name: last_name })

    }

    updatePassword = async (id: number, password: string) => {

        await this.userRepository.update(id, { password: password });

    }

    updateResetToken = async (id: number, token: string)  => {

        await this.userRepository.update(id, { reset_password_token: token });

    }

}