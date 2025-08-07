import Sequelize from "sequelize";

export const setupDB = () => {
    console.log("Setting up database...");
    const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } =
        process.env;

    const sequelize = new Sequelize(
        POSTGRES_DB,
        POSTGRES_USER,
        POSTGRES_PASSWORD,
        {
            host: POSTGRES_HOST,
            dialect: "postgres",
        },
    );
    console.log("Database setup complete.");

    return sequelize;
};

export const initializeDB = async (sequelize) => {
    console.log("Initializing database...");
    await sequelize.sync();
    console.log("Database initialized successfully.");
};

export const connectDB = async (sequelize) => {
    try {
        console.log("Connecting to the database...");
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }

    return sequelize;
};

export default connectDB;
