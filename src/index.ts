import express from "express";
import Cadastrar from "./models/Cadastrar.ts";

async function main() {
    try {
        await Cadastrar.sync({ force: false });
        const newCadastrar = await Cadastrar.create({
            nome: "João",
            email: "juan@gmail.com",
            telefone: "(11) 99999-9999",
            cpf: "111.111.111-11",
        });
        console.log("Novo usuário cadastrado: ", newCadastrar);
    } catch (error) {
        console.log(error);
    }
}
main();

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
