const express = require("express");
require("dotenv").config();

const healthRoute = require("./routes/health");
const client = require("./config/redis");   // <-- add this

const app = express();
const PORT = process.env.PORT || 3000;

// Try to connect to Redis on startup
(async () => {
    try {
        await client.connect();
        console.log("✅ Redis is connected at startup!");
        await client.disconnect();
    } catch (err) {
        console.log("❌ Redis failed to connect at startup:", err.message);
    }
})();

app.use("/health", healthRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
