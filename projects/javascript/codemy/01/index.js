const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to codemy!</h1>`);
});

app.listen(3000, () => {
    console.log('app started on port 3000');
});