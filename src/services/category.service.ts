import { AppUtils } from "src/utils/app.utils";
import { Inject, Injectable } from "@nestjs/common";
import { Category } from "src/models/category.model";
import { CategoryRepository } from "src/repository/category.repository";

@Injectable()
export class CategoryService {

    constructor(@Inject(CategoryRepository) private readonly categoryRepository: CategoryRepository) {}

    saveCategory = async (req_body) : Promise<any>  => {

        const { name } = req_body;

        let category = new Category();
        category.category_name = name;

        await this.categoryRepository.saveCategory(category)

        let response = AppUtils.appResponse(200, "Category created successfully", "Category");
        return response;
        

    }

    editCategory = async (req_body, id) : Promise<any> => {

        const { name } = req_body;

        await this.categoryRepository.editCategory(id, name);

        let response = AppUtils.appResponse(200, "This Category has been updated", "Success");
        return response;

    }

    getCategory = async (id) : Promise<any> => {

        const category = await this.categoryRepository.getCategory(id)

        let response = AppUtils.appResponseWithData(200, "Category returned", "Success", category);
        return response;  

    }

    deleteCategory = async (id) : Promise<any> => {

        await this.categoryRepository.deleteCategory(id)

        let response = AppUtils.appResponse(200, "Category deleted", "Success");
        return response;  

    }

    getCategories = async () : Promise<any> => {

        const categories = await this.categoryRepository.getCategories()

        let response = AppUtils.appResponseWithData(200, "Users returned", "Success", categories);
        return response;

        
    }



}
