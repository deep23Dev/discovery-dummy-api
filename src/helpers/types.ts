import { Decimal128 } from "mongoose";

export type Influencer = {
    _id?: string;
    fullName?: string;
    username?: string;
    picture?: string;
    followers?: number;
    engagements?: number;
    engagementRate?: Decimal128;
    city?: string;
    country?: string;
    language?: [
        {
            code?: string,
            name?: string,
        }
    ];
    postCount: string,
}
