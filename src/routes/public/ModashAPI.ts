import { Router } from "express"
import { ModashApiController } from "../../controller/ModashApiController";

export const ModashAPI = () => {
    const ModashAPIRouter: Router = Router();
    ModashAPIRouter.get('/getParameters/:category/:parameter', ModashApiController.getDataOfParameter);
    ModashAPIRouter.get('/getSuggestion/:category/:search', ModashApiController.getSuggestion);

    return ModashAPIRouter;
}