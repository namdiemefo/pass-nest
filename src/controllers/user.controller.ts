import { Controller, Delete, Get, Inject, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserRepository } from 'src/repository/user.repository';
import { UserService } from 'src/services/user.service';

// const userRepository = new UserRepository();

// const userService = new UserService(userRepository);

@Controller('/api/v1/user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('/register')
  async register(@Req() request: Request, @Res() response: Response) {
    const body = request.body;
    const my_response = await this.userService.saveUser(body);
    return response.json(my_response);
  }

  @Post('/login')
  async login(@Req() request: Request, @Res() response: Response) {
    const body = request.body;
    const my_response = await this.userService.login(body);
    return response.json(my_response);
  }

  @Post('/forgot')
  async forgot(@Res() response: Response) {
    const my_response = await this.userService.forgotPassword(response.locals.jwt.id);
    return response.json(my_response);
  }

  @Delete('/')
  async delete(@Res() response: Response) {
    const my_response = await this.userService.deleteUser(response.locals.jwt.id);
    return response.json(my_response);
  }

  @Post('/reset')
  async reset(@Req() request: Request, @Res() response: Response) {
    const body = request.body;
    const my_response = await this.userService.updatePassword(response.locals.jwt.id, body);
    return response.json(my_response);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string, @Res() response: Response) {
    const my_response = await this.userService.getUser(id);
    return response.json(my_response);
  }

  @Put('/')
  async editUser(@Req() request: Request, @Res() response) {
    const body = request.body;
    const my_response = await this.userService.editUser(response.locals.jwt.id, body);
    return response.json(my_response);
  }

  @Get('/')
  async getUsers(@Res() response: Response) : Promise<any> {
    const my_response = await this.userService.getUsers();
    return response.json(my_response);
  }







}