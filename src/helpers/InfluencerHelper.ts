import { Influencer } from ".";

const Influencers = require('../model/Influencer');
const DatabaseError = require('../errors/databaseError');

export const InfluencerHelper = () =>{
    // This function is used to export Influencer Helper functions
}

InfluencerHelper.addInfluencer = async (data: Influencer) =>{
    try {
        const influencer: Influencer = await Influencers.create(data);
        return influencer;
    } catch (error) {
        throw new DatabaseError(`Can't Add User: ${error}`)
    }
}

InfluencerHelper.getInfluencers =async () => {
    try {
        const influencers : Influencer[] = await Influencers.find();
        return influencers;
    } catch (error) {
        throw new DatabaseError(`Can't Get Influencer Data : ${error}`)
    }
}