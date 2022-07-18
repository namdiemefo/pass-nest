import { User } from "src/models/user.model";
import { DeleteResult } from "typeorm";
import dataSource from "../db/db";

const userRepository = dataSource.getRepository(User)

export class UserRepository {

    saveUser = async (user: User) => {

        await userRepository.save(user);

    }

    getUsers = async () : Promise<User[]> => {

        return await userRepository.find({
            relations: {
               
            }
        });
        
    }

    deleteUser = async (id: number)  => {
        
        await userRepository.delete(id);

    }

    editUser = async (id: number, user: User)  => {
        
        await userRepository.update(id, { first_name: user.first_name, last_name: user.last_name })

    }

}