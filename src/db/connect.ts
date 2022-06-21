import mongoose from "mongoose";
import config from "config";

const connectToMongo = async () => {
    const dbUri = config.get("dbUri") as string;

    return await mongoose.connect(dbUri, () => {
        console.log("Connected Successfully");
    })
}

export default connectToMongo;