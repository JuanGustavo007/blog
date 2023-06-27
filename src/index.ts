import express from "express";
import Cadastrar from "./models/Cadastrar.ts";
import bodyParser from "body-parser";
import Perguntar from "./models/Perguntar.ts";
async function main() {
    try {
        await Cadastrar.sync({ force: false });
        await Perguntar.sync({ force: false });
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/cadastrar", (req, res) => {
    res.render("cadastrarCliente");
});

//Casdastro de clientes

app.post("/cadastrar", async (req, res) => {
    //Precisa criar a logica de criar somente cadastro unico, verificar no bd se o email ja existe
    const { nome, email, telefone, cpf, senha, confirmar } = req.body;

    try {
        if (senha !== confirmar) {
            res.send("Senhas não conferem");
        } else {
            res.render("cadastroSucess");
            const cadastrar = await Cadastrar.create({
                nome,
                email,
                telefone,
                cpf,
                senha,
                confirmar,
            });
        }
    } catch (error) {
        console.log(error);
    }
});

app.get("/entrar", (req, res) => {
    res.render("entrar");
});

app.post("/painel", async (req, res) => {
    const { loginEmail, loginSenha } = req.body;
    console.log(loginEmail, loginSenha);

    Cadastrar.findOne({
        where: {
            email: loginEmail,
            senha: loginSenha,
        },
    }).then((cadastrar) => {
        if (cadastrar) {
            res.render("painelCliente", { em: loginEmail });
        } else {
            res.send("Usuario não encontrado");
        }
    });
});

app.post("/pergunta", async (req, res) => {
    const { qmperguntou } = req.body;
    res.render("pergunta", { qmperguntou: qmperguntou });
});
app.get("/perguntaSucess", (req, res) => {
    res.render("perguntaSucess");
});

app.post("/salvarpergunta", async (req, res) => {
    const { opcao, conteudo, qmperguntou } = req.body;
    try {
        const perguntar = await Perguntar.create({
            opcao,
            conteudo,
            qmperguntou,
        });

        res.send("Pergunta enviada com sucesso");
    } catch (error) {
        console.log(error);
    }
});
app.get("/painel", async (req, res) => {
    res.render("painelCliente");
});

app.listen(3000, () => {
    console.log("Servidor online");
});
