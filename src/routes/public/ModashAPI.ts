import { Router } from "express"
import { ModashApiController } from "../../controller/ModashApiController";

export const ModashAPI = () => {
    const ModashAPIRouter: Router = Router();
    // ModashAPIRouter.get('/getParameters/:category/:parameter', ModashApiController.getDataOfParameter);
    ModashAPIRouter.get('/getParameters', ModashApiController.getDataOfParameter);
    ModashAPIRouter.get('/getSuggestion', ModashApiController.getSuggestion);
    ModashAPIRouter.post('/getInfluencers', ModashApiController.getInfluencer);
    ModashAPIRouter.get('/getInfluencer', ModashApiController.getInfluencerReport);

    return ModashAPIRouter;
}