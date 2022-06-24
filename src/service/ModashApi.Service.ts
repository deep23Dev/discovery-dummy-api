import { ModashApiHelper } from "../helpers/ModashApiHelper"

export const ModashApiService = () => {
}

ModashApiService.getDataOfParameter = async (category: string, parameter: string) => {
    const parameters: any = await ModashApiHelper.getDataOfParameter(category,parameter);
    return parameters;
}

ModashApiService.getSuggestion =async (category:string, search:string) => {
    const suggested_Data: any = await ModashApiHelper.getSuggestion(category,search);
    return suggested_Data;
}