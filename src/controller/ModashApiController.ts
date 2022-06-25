import { Request, Response } from "express"
import { ModashApiService } from "../service/ModashApi.Service"

export const ModashApiController = () => {

}

ModashApiController.getDataOfParameter = async (req: Request, res: Response) => {
    try {
        let query: any = req.query;
        const parameters: any = await ModashApiService.getDataOfParameter(query.category, query.parameter);
        return res.status(200).send({ sucess: true, parameters });
    } catch (error) {
        return res.status(500).send(error);
    }
}

ModashApiController.getSuggestion = async (req: Request, res: Response) => {
    try {
        let query: any = req.query;
        const suggested_Data: any = await ModashApiService.getSuggestion(query.category, query.search);
        return res.status(200).send({ sucess: true, suggested_Data });
    } catch (error) {
        return res.status(500).send(error);
    }
}

ModashApiController.getInfluencer = async (req: Request, res: Response) => {
    try {
        let query: any = req.query;
        const influencers_Data: any = await ModashApiService.getInfluencers(query.category, req.body);
        return res.status(200).send({ sucess: true, influencers_Data });
    } catch (error) {
        return res.status(500).send(error);
    }
}

ModashApiController.getInfluencerReport = async (req: Request, res: Response) => {
    try {
        let query: any = req.query;
        console.log(typeof (req.params.userId));
        const influencer_Data: any = await ModashApiService.getInfluencerReport(query.category, query.userId);
        return res.status(200).send({ sucess: true, influencer_Data });
    } catch (error) {
        return res.status(500).send(error);
    }
}