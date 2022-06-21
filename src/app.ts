import express from 'express';
import config from 'config';
import connectToMongo from './db/connect';
import { initRoutes } from './routes';
import mongoose from 'mongoose';
const cors = require('cors');

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

const whitelist = [
    "http://localhost:3000",
    "https://ot.ovonts.com",
    "http://ot.ovonts.com",
    "https://ovonts-ot-ref.netlify.app",
    "https://ovonts-ot-dev.netlify.app",
    "https://ovonts-ot-ref-test.netlify.app",
];

const corsOptions = {
    origin: function (origin:any, callback:any) {
        if (!origin && process.env.NODE_ENV == "development") {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initRoutes(app);

// "raw": "https://sourcing.ovonts.com/api/get_instagram_username_modash",

// "raw": "https://sourcing.ovonts.com/api/people_modash_instagram_user_suggestions",

app.listen(port, host, async () => {
    console.log(`Server listing at http://${host}:${port}`);
    await connectToMongo();
})

console.log("Hello");

