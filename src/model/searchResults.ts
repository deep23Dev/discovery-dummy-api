const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const InfluencerSchema = new Schema({
    directMatch: [
        { type: ObjectId, ref: "GlobalInfluencerIndex" }
    ],
    lookAlikes: [
        { type: ObjectId, ref: "GlobalInfluencerIndex" }
    ]
})

const Influencer = mongoose.model('InfluencerData', InfluencerSchema);

export default Influencer;
