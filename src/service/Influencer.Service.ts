import { InfluencerHelper } from "../helpers/InfluencerHelper";

import { Influencer } from "../helpers";

export const InfluencerService = () => {

}

InfluencerService.addInfluencer = async (data: Influencer) => {
    const influencer : any = await InfluencerHelper.addInfluencer(data);
    return influencer;
}

InfluencerService.getInfluencers =async () => {
    const influencers : any = await InfluencerHelper.getInfluencers();
    return influencers;
}
