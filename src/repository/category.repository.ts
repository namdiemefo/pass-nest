import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/models/category.model";
import { Repository } from "typeorm";

@Injectable()
export class CategoryRepository {

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>;

    saveCategory = async (category: Category) => {

        await this.categoryRepository.save(category);

    }

    getCategories = async () : Promise<Category[]> => {

        return await this.categoryRepository.find();
        
    }

    getCategory = async (id) : Promise<Category> => {

        return await this.categoryRepository.findOne({ where : { id: id } });
        
    }

    deleteCategory = async (id: number)  => {
        
        await this.categoryRepository.delete(id);

    }

    editCategory = async (id: number, name)  => {

        await this.categoryRepository.update(id, { category_name: name })

    }

}