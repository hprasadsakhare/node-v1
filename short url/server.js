const express = require('express');
const { connectToMongoDB } = require('./utils/dbConnect');
const urlRoute = require('./routes/urlRoute');
const URL = require('./models/urlModel');
const app = express();
const port = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.error("MongoDB connection error:", error));

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error("Error redirecting:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.listen(port, () => console.log(`Server is running on port ${port}`));
