const express = require("express");

const app = express();

const port = 3060;

app.get("/", (req, res) => {
    let a = 10;
    let b = 20;
    let c = a + b;
    res.send("Hello Work")
});
app.listen(port, () => console.log(`Listening with port http://localhost:${port}`));