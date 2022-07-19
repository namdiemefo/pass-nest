import { Controller, Delete, Get, Inject, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/services/user.service';

@Controller('/api/v1/')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('register')
  async register(@Req() request: Request, @Res() response: Response) {
    const body = request.body;
    const my_response = await this.userService.saveUser(body);
    return response.json(my_response);
  }

  @Post('login')
  async login(@Req() request: Request, @Res() response: Response) {
    const body = request.body;
    const my_response = await this.userService.login(body);
    return response.json(my_response);
  }

  @Post('user/forgot')
  async forgot(@Res() response: Response) {
    const my_response = await this.userService.forgotPassword(response.locals.jwt.id);
    return response.json(my_response);
  }

  @Delete('user/:id')
  async delete(@Res() response: Response, @Param('id') id: string,) {
    const my_response = await this.userService.deleteUser(id);
    return response.json(my_response);
  }

  @Put('user/reset')
  async reset(@Req() request: Request, @Res() response: Response) {
    const body = request.body;
    const my_response = await this.userService.updatePassword(response.locals.jwt.id, body);
    return response.json(my_response);
  }

  @Get('user/:id')
  async getUser(@Param('id') id: string, @Res() response: Response) {
    const my_response = await this.userService.getUser(id);
    return response.json(my_response);
  }

  @Put('user/')
  async editUser(@Req() request: Request, @Res() response) {
    const body = request.body;
    const my_response = await this.userService.editUser(body, response.locals.jwt.id);
    return response.json(my_response);
  }

  @Get('user/')
  async getUsers(@Res() response: Response) : Promise<any> {
    const my_response = await this.userService.getUsers();
    return response.json(my_response);
  }







}