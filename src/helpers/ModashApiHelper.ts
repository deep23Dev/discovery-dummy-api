import axios from "axios";
import config from "config";

const DatabaseError = require('../errors/databaseError');

export const ModashApiHelper = () => {
    // This function is used to export Modash Helper functions
}

const modash_api = config.get("modash_api") as string;
const modash_api_key = config.get("modash_api_key") as string;

ModashApiHelper.getDataOfParameter = async (category: string, parameter: string, parameterQuery:string) => {
    try {
        const url = `${modash_api}/${category}/${parameter}?limit=10&query=${parameterQuery}`;

        const parameter_data: any = await axios.get(url, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${modash_api_key}`
            }
        })

        return parameter_data.data;
    } catch (error) {
        throw new DatabaseError(`Can't Add User: ${error}`)
    }
}

ModashApiHelper.getSuggestion = async (category: string, search: string) => {
    try {
        const url = `${modash_api}/${category}/users?query=${search}&limit=10`

        const suggested_Data: any = await axios.get(url, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${modash_api_key}`
            }
        })

        return suggested_Data.data;
    } catch (error) {
        throw new DatabaseError(`Can't Add User: ${error}`)
    }
}

ModashApiHelper.getInfluencers =async (category: string, data: any) => {
    try {
        const url = `${modash_api}/${category}/search`;
    
        const influencers_Data: any = await axios.post(url, data, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${modash_api_key}`
            }
        })
    
        return influencers_Data.data;
    } catch (error) {
        throw new DatabaseError(`Can't Add User: ${error}`)
    }
}

ModashApiHelper.getInfluencerReport =async (category: string, userId: string) => {
    try {
        const url = `${modash_api}/${category}/profile/${userId}/report`;
    
        const influencer_Data: any = await axios.get(url, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${modash_api_key}`
            }
        })
    
        return influencer_Data.data;
    } catch (error) {
        throw new DatabaseError(`Can't Add User: ${error}`)
    }
}

