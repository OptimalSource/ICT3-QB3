const express = require('express');
const router = express.Router();
const fs = require('fs');

const bookData = JSON.parse(fs.readFileSync(`${__dirname}/../book-data.json`, 'utf-8'));

router.get("/", (req, res) => {
    if (req.query.title) {
        const title = req.query.title;
        let newBookData = [];

        newBookData = bookData.filter(el => {
            return el.title === title;
        });
        res.status(200).json({
            message: "success",
            data: newBookData
        })
    } else{
        const id = parseInt(req.query.id);
        let book = [];
        book = bookData.filter(el => {
            return el.id === id;
        })
        res.status(200).json({
            message: "success",
            data: book
        })
    }
})

module.exports = router;