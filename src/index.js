const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");

const app = express();

app.use(express.static(path.join(__dirname, 'resources/public')));

app.engine("hbs", hbs.engine({
    extname : ".hbs",
}));
app.use(morgan("combined"));

app.set("view engine", "hbs");
app.set('views', path.join(__dirname, "resources/views"));

const port = 3060;


app.get("/", (req, res) => {
    
console.log(__dirname);
    res.render("home");
});
app.listen(port, () => console.log(`Listening with port http://localhost:${port}`));