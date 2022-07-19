import { AppResponse } from "src/interfaces/response.interface";

export class AppUtils {

    static appResponse(code: number, message: string, status: string) : AppResponse{

        return {
            status: status,
            code: code,
            message: message,
            data : null
        } as AppResponse
    
    } 

    static appResponseWithData(code: number, message: string, status: string, data: any) : AppResponse{

        return {
            status: status,
            code: code,
            message: message,
            data : data
        } as AppResponse
    
    } 

}