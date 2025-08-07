import loadEnv from "../../utils/loadEnv";

loadEnv();

// both development and production use the same variable names for the env variables
// currently the correct env is loaded based on the NODE_ENV by the loadEnv function
// depending on the NODE_ENV, the correct env variables are loaded from .env.dev or .env.prod
// as a result, the same env variables are used for both development and production

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST } =
    process.env;

export default {
    development: {
        username: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DB,
        host: POSTGRES_HOST,
        dialect: "postgres",
    },
    production: {
        username: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DB,
        host: POSTGRES_HOST,
        dialect: "postgres",
    },
};
