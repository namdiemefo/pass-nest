import { Controller, Delete, Get, Inject, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CategoryService } from 'src/services/category.service';

@Controller('/api/v1/post')
export class PostController {
  constructor(@Inject(CategoryService) private readonly categoryService: CategoryService) {}

  @Post('/create')
  async register(@Req() request: Request, @Res() response: Response) {
    const body = request.body;
    const my_response = await this.categoryService.saveCategory(body);
    return response.json(my_response);
  }

  @Delete('/:id')
  async delete(@Res() response: Response, @Param('id') id: string) {
    const my_response = await this.categoryService.deleteCategory(id);
    return response.json(my_response);
  }

  @Get('/:id')
  async getPost(@Param('id') id: string, @Res() response: Response) {
    const my_response = await this.categoryService.getCategory(id);
    return response.json(my_response);
  }

  @Put('/')
  async editPost(@Req() request: Request, @Res() response, @Param('id') id: string) {
    const body = request.body;
    const my_response = await this.categoryService.editCategory(body, id);
    return response.json(my_response);
  }

  @Get('/')
  async getPosts(@Res() response: Response) : Promise<any> {
    const my_response = await this.categoryService.getCategories();
    return response.json(my_response);
  }







}