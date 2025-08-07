import dotenv from "dotenv";

export default function loadEnv() {
    const { NODE_ENV, SEVALLA } = process.env;
    if (SEVALLA) {
        console.log(
            "Deploying to Sevalla, using environment variables from hosting provider",
        );
        return;
    }

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
