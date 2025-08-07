import dotenv from "dotenv";

export default function loadEnv() {
    const { NODE_ENV } = process.env;
    console.log(NODE_ENV);

    if (NODE_ENV === "production") {
        dotenv.config({
            path: ".env.prod",
        });
    } else {
        dotenv.config({
            path: ".env.dev",
        });
    }
}
