import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/models/category.model";
import { Repository } from "typeorm";
import { category } from "../data/category.data";

@Injectable()
export class CategorySeederService {

    @InjectRepository(Category)
    private readonly postRepository: Repository<Category>

    /**
   * Seed all categories.
   *
   * @function
   */
    createCategory() {

        this.postRepository.insert(category);

    }

}