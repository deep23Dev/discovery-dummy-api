import { Request, Response } from "express"
import { ModashApiService } from "../service/ModashApi.Service"

export const ModashApiController = () => {

}

ModashApiController.getDataOfParameter = async (req: Request, res: Response) => {
    try {
        const parameters: any = await ModashApiService.getDataOfParameter(req.params.category, req.params.parameter);
        return res.status(200).send({ sucess: true, parameters });
    } catch (error) {
        return res.status(500).send(error);
    }
}

ModashApiController.getSuggestion =async (req: Request, res: Response) => {
    try {
        const suggested_Data: any = await ModashApiService.getSuggestion(req.params.category, req.params.search);
        return res.status(200).send({ sucess: true, suggested_Data });
    } catch (error) {
        return res.status(500).send(error);
    }
}