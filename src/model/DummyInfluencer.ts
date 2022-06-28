const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DummyInfluencerSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    socialLink: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    followers: {
        type: Number,
    },
    engagements: {
        type: Number,
    },
    engagementRate: {
        type: mongoose.Decimal128 ,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    language: [
        {
            code: String,
            name: String,
        }
    ],
    postCount: {
        type: Number
    }
})

const DummyInfluencer = mongoose.model('Influencer',DummyInfluencerSchema);

export default DummyInfluencer;
