import { Express } from "express";
import { InfluencerRoutes } from "./public/Influencer";

export const initRoutes = (app: Express) => {
    app.use("/influencer",InfluencerRoutes());
    app.get("/", (req, res) => {
        res.status(200).json("20th June");
    })
}