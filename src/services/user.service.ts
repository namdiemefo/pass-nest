import { UserRepository } from "src/repository/user.repository";
import { User } from "src/models/user.model";
import signJWT from "src/middlewares/jwt";
import { AppResponse } from "src/interfaces/response.interface";
import { AppUtils } from "src/utils/app.utils";
import crypto from 'crypto';

export class UserService {

    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    login = async (body) : Promise<any> => {

        const { email, password } = body;

        let user = await this.userRepository.getUserIfEmailExists(email);

        if (user !== null) {

            if (user.password !== password) {
                let response = AppUtils.appResponse(400, "Incorrect password", "Failed");
                return response;  
            }

            signJWT(user, async (error, token) => {

                if (error) {
                    let response = AppUtils.appResponse(400, `${error.message}`, "Failed");
                    return response;
                }
    
                user.token = token ?? '';
                await this.userRepository.saveUser(user);
    
            })

        } else {
            let response = AppUtils.appResponse(400, "User does not exist", "Failed");
            return response;  
        }

    }

    saveUser = async (body) : Promise<any> => {

        const { first_name, last_name, email, password } = body;

        let user = new User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.password = password;

        signJWT(user, async (error, token) => {
            if (error != null) {
                let response = AppUtils.appResponse(400, "Failed to generate token", "Token Error");
                return response;
            }

            if (token != null) {
                user.token = token;
                await this.userRepository.saveUser(user);
                let response = AppUtils.appResponse(200, "Failed to generate token", "Token Error");
                return response;
            }

        })
        

    }

    editUser = async (body, id) : Promise<any> => {

        const { first_name, last_name } = body;

        await this.userRepository.editUser(id, first_name, last_name);

        let response = AppUtils.appResponse(200, "This user has been updated", "Success");
        return response;

    }

    getUser = async (id) : Promise<any> => {

        const user = await this.userRepository.getUser(id)

        let response = AppUtils.appResponseWithData(200, "User returned", "Success", user);
        return response;  

    }

    deleteUser = async (id) : Promise<any> => {

        await this.userRepository.deleteUser(id)

        let response = AppUtils.appResponse(200, "User deleted", "Success");
        return response;  

    }

    getUsers = async () : Promise<any> => {

        const users = await this.userRepository.getUsers()

        let response = AppUtils.appResponseWithData(200, "Users returned", "Success", users);
        return response;

        
    }

    updatePassword = async (id, body) : Promise<any> => {

        const { old_password, new_password, token } = body;

        const user = await this.userRepository.getUser(id)

        if (old_password !== user.password) {
            let response = AppUtils.appResponse(400, "This password does not match", "Incorrect password");
            return response;
        }

        if (user.reset_password_token !== token) {
            let response = AppUtils.appResponse(400, "This reset toekn is invalid", "Incorrect token");
            return response;
        }

        await this.userRepository.updatePassword(id, new_password);
        let response = AppUtils.appResponse(200, "User password updated", "Success");
        return response;

    }

    forgotPassword = async (id) => {

        const token = crypto.randomBytes(20).toString("hex");

        await this.userRepository.updateResetToken(id, token);

        let response = AppUtils.appResponseWithData(200, "User returned", "Success", token);
        return response;

    }



}
