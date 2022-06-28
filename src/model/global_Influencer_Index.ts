const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const GlobalInfluencerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    instagram_id: {
        type: String,
        default: null,
    },
    instagramHandle: {
        type: String,
        default: null,
    },
    youtubeChannel_id: {
        type: String,
        default: null,
    },
    youtubeChannelName: {
        type: String,
        default: null
    },
    tiktok_id: {
        type: String,
        default: null
    },
    tiktokHandle: {
        type: String,
        default: null
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})

const GlobalInfluencerIndex = mongoose.model('GlobalInfluencerIndex', GlobalInfluencerSchema);

export default GlobalInfluencerIndex;
