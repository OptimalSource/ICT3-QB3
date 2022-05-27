const express = require('express');
const cors = require('cors');
const booksRouter = require("./routes/books");
const detailsRouter = require("./routes/details");
const app = express();

app.use(cors());
app.use("/books", booksRouter);
app.use("/details", detailsRouter);

app.get('/', (req, res) => {
    res.send("Hello from the server");
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
