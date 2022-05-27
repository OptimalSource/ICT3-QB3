const express = require('express');
const router = express.Router();
const fs = require('fs');

const bookData = JSON.parse(fs.readFileSync(`${__dirname}/../book-data.json`, 'utf-8'));

router.get("/", (req, res) => {
    const page = parseInt(req.query.page);
    const startIndex = (page - 1) * 20;
    const endIndex = page * 20;
    const newBookData = bookData.slice(startIndex, endIndex);
    res.status(200).json({
        message: "message",
        data: newBookData
    })
})

module.exports = router;