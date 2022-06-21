import { Router } from "express"
import { InfluencerController } from "../../controller/Influencer.Controller";

export const InfluencerRoutes = () => {
    const influencerRouter: Router = Router();
    influencerRouter.post('/addInfluencer', InfluencerController.addInfluencer);
    influencerRouter.get('/getInfluencers', InfluencerController.getInfluencers);

    return influencerRouter;
}