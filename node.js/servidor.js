
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

var app = express();

app.use(express.static("./public"));

var server = http.createServer(app);

server.listen(3000);


console.log("servidor funcionando...".rainbow)
