import createApp from "./app.js";
import loadEnv from "./utils/loadEnv.js";
import {
    connectDB,
    initializeDB,
    setupDB,
} from "./database/config/sequelize.js";

// Load environment variables
loadEnv();

// Connect to the database
export const sequelize = await setupDB();
await initializeDB(sequelize);
await connectDB(sequelize);

// Create the app and listen for requests
const app = createApp();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
