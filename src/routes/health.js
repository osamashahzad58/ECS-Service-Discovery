const express = require("express");
const router = express.Router();
const client = require("../config/redis");

router.get("/", async (req, res) => {
    try {
        await client.connect();
        console.log("✅ Redis connected");
        res.status(200).send("Redis connected successfully!");
    } catch (err) {
        console.error("❌ Failed to connect to Redis:", err.message);
        res.status(500).send("Failed to connect to Redis");
    } finally {
        await client.disconnect();
    }
});

module.exports = router;
