import { Request, Response } from "express"
import { InfluencerService } from "../service/Influencer.Service";


export const InfluencerController = () => {

}

InfluencerController.addInfluencer = async (req: Request, res: Response) => {
    try {
        const influencer: any = await InfluencerService.addInfluencer(req.body);
        return res.status(200).send({ success: true, influencer });
    } catch (error) {
        return res.status(500).send(error);
    }
}

InfluencerController.getInfluencers =async (req: Request, res: Response) => {
    try {
        const influencers : any = await InfluencerService.getInfluencers();
        return res.status(200).send({success: true, influencers});
    } catch (error) {
        return res.status(500).send({success:false, error});
    }
}