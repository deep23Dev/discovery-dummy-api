const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const InfluencerSchema = new Schema({
    createdBy: {
        type: ObjectId,
        ref: "user",
        require: true,
    },
    workspace_id: {
        type: ObjectId,
        ref: "worksapce",
        require: true,
    },
    global_Influencer_Index_Id: {
        type: ObjectId,
        ref: "GlobalInfluencerIndex",
        require: true,
    },
    isFullReport: {
        type: Boolean,
        default: false
    }
})

const Influencer = mongoose.model('InfluencerData',InfluencerSchema);

export default Influencer;
