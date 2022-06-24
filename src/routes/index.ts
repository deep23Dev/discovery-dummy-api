import { Express } from "express";
import { InfluencerRoutes } from "./public/Influencer";
import { ModashAPI } from "./public/ModashAPI";

export const initRoutes = (app: Express) => {
    app.use("/influencer",InfluencerRoutes());
    app.use("/influencerData",ModashAPI());
    app.get("/", (req, res) => {
        res.status(200).json("20th June");
    })
}