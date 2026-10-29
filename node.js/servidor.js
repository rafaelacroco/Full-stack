
let colors = require("colors");
/* 
console.log("olá, mundo!".rainbow);

     dir - lista oq tem dentro da pasta 
        node .\nome do arquivo - para rodar o programa
        clear - limpa o terminal
        npm - gerenciador de pacotes, insere, delete e atualize

        informações que são pedidas com o cód NPM INIT:
        package name: (node) 
        version: (1.0.0) 0.0.1
        description: Meu primeiro servdor <3
        entry point: (servidor.js) 
        test command: 
        git repository: 
        keywords: 
        author: Rafaela Croco da Silva
        license: (ISC) 
*/


//http://localhost:3000/servidor.html (para acesar o servidor no nosso proprio computador )

let http = require("http");
var express = require("express");
let bodyParser = require("body-parser")

var app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer(app);

server.listen(3000);


console.log("servidor funcionando...".rainbow)

/////////////////////////////////////////////////////////////////////////////////////////

app.post("/cadastrar", function(req, res){
        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;
        let email = req.body.email;
        let senha = req.body.senha;
        
        console.log(nome, sobrenome, email, senha);
        res.render("resposta.ejs", {nome_template: "rafa", sobrenome_template: "teste"});
})

app.get("/cadastrar", function(req, res){
        let nome = req.query.nome;
        let sobrenome = req.query.sobrenome;
        let email = req.query.email;
        let senha = req.query.senha;
      
        console.log(nome, sobrenome, email, senha);
        res.render("resposta.ejs", {nome_template: "rafa", sobrenome_template: "teste"});
})

