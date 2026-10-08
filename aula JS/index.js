// Altera informações 
document.getElementById("nome").innerHTML = "Rafaela";

//o let armazena o valor e o console log print 
/* let texto = document.getElementById("texto").value;
 console.log (texto)
 */


// criando uma função
/*function imprimir() {
    let texto = document.getElementById("texto").value;
    console.log (texto)
}*/


/* criando uma função *NÃO DEU CERTO VOLTAR*

function imprimir() {
    let texto = document.getElementById("texto").Value;
    console.log (texto)
    Document.getElementById("span").innerHTML = texto;
}*/


//ex1
function ex1(){
    let nome = document.getElementById("ex1_nome").value;
    let idade = document.getElementById("ex1_idade").value;
    let ano_atual = 2026;
    let ano_nasc = ano_atual - idade ;

    let resposta = "olá " + nome + ", seu ano de nascimento é " + ano_nasc + "!";
    document.getElementById("ex1_span").innerHTML = resposta;
    
}

/*FAZER FUNÇÃO DE SOMA*/ 


//ex2 ver pq ta errado
function ex2( ){
    let numero = document.getElementById("numero_ex2").value;
    let resposta2 = " ";
    for (let i = 0; i <= numero; i--) {
        resposta2 += i + " ";
    }
    document.getElementById("ex2_span").innerHTML = resposta2;
}