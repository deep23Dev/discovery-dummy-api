import { ModashApiHelper } from "../helpers/ModashApiHelper"

export const ModashApiService = () => {
}

ModashApiService.getDataOfParameter = async (category: string, parameter: string) => {
    const parameters: any = await ModashApiHelper.getDataOfParameter(category, parameter);
    return parameters;
}

ModashApiService.getSuggestion = async (category: string, search: string) => {
    const suggested_Data: any = await ModashApiHelper.getSuggestion(category, search);
    return suggested_Data;
}

ModashApiService.getInfluencers = async (category: string, data: object) => {
    const influencers_Data: any = await ModashApiHelper.getInfluencers(category, data);
    return influencers_Data;
}

ModashApiService.getInfluencerReport = async (category: string, userId: string) => {
    const influencer_Data: any = await ModashApiHelper.getInfluencerReport(category, userId);
    return influencer_Data;
}