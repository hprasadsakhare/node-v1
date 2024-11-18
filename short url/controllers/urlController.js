const shortid = require("shortid");
const URL = require('../models/urlModel');

async function handleGenerateNewShortURL(req, res) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortId = shortid.generate();

    try {
        const newUrl = await URL.create({
            shortId,
            redirectUrl: url,
            visitHistory: []
        });
        return res.json({ id: newUrl.shortId });
    } catch (error) {
        console.error("Error saving URL:", error);
        return res.status(500).json({ error: "Error saving URL" });
    }
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;

    try {
        const result = await URL.findOne({ shortId });
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory
        });
    } catch (error) {
        console.error("Error retrieving analytics:", error);
        return res.status(500).json({ error: "Error retrieving analytics" });
    }
}

async function updateShortURL(req, res) {
    const { id } = req.params;
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const updatedUrl = await URL.findOneAndUpdate(
            { shortId: id },
            { redirectUrl: url },
            { new: true }
        );
        if (!updatedUrl) {
            return res.status(404).json({ error: 'URL not found' });
        }
        return res.json({ message: 'URL updated successfully', updatedUrl });
    } catch (error) {
        console.error("Error updating URL:", error);
        return res.status(500).json({ error: "Error updating URL" });
    }
}

module.exports = {
    handleGenerateNewShortURL,
    updateShortURL,
    handleGetAnalytics
};
