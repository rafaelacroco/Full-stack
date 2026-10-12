/* Math.floor arrendonda sempre para baixo (até o número inteiro) Math.random gera um número decimal de 0 a 0.99, então multiplicamos por 100*/ 
const num_aleatorio = Math.floor(Math.random()*100);
//teste
/*console.log(num_aleatorio);
document.getElementById("numero_aleatorio").innerHTML = num_aleatorio;*/

const num_rejeitados_maior = [];
const num_rejeitados_menor = [];

function comparar() {
    let num_user = document.getElementById("numero").value;
    if (num_user > num_aleatorio) {
        const menor = "O número é menor"
        document.getElementById("resultado").innerHTML = menor;
        num_rejeitados_maior.push(num_user);
        document.getElementById("num_maior").innerHTML = num_rejeitados_maior;
        document.getElementById("resultado").style.setProperty("color", "red"); 
    }
    else if (num_user < num_aleatorio) {
        const maior = "O número é maior"
        document.getElementById("resultado").innerHTML = maior;
        num_rejeitados_menor.push(num_user);
        document.getElementById("num_menor").innerHTML = num_rejeitados_menor;
        document.getElementById("resultado").style.setProperty("color", "red");
    }
    else {
        const igual = "O número é igual, Parabéns!"
        document.getElementById("resultado").innerHTML = igual;
        document.getElementById("resultado").style.setProperty("color", "green");
    }
}
