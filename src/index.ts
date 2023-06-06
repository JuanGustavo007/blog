import express from "express";

const app = express();

// view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/cadastrar", (req, res) => {
    res.render("cadastrarCliente");
});
app.listen(3000, () => {
    console.log("Servidor online");
});
