import { User } from "src/models/user.model";
import dataSource from "../db/db";

const userRepository = dataSource.getRepository(User)

export class UserRepository {

    saveUser = async (user: User) => {

        await userRepository.save(user);

    }

    getUsers = async () : Promise<User[]> => {

        return await userRepository.find();
        
    }

    getUser = async (id) : Promise<User> => {

        return await userRepository.findOne({ where : { id: id } });
        
    }

    getUserIfEmailExists = async (email) : Promise<User> => {

        return await userRepository.findOne({ where: { email: email } });
        
    }

    deleteUser = async (id: number)  => {
        
        await userRepository.delete(id);

    }

    editUser = async (id: number, first_name, last_name)  => {
        
        await userRepository.update(id, { first_name: first_name, last_name: last_name })

    }

    updatePassword = async (id: number, password: string) => {

        await userRepository.update(id, { password: password });

    }

    updateResetToken = async (id: number, token: string)  => {

        await userRepository.update(id, { reset_password_token: token });

    }

}