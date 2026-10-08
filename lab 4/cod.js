//geração de número
const aleatorio = Math.floor (Math.random () * (0 - 100)) + 1;
//console.log(aleatorio) mostra o número


function js_comparacao() {
    let numero_user = document.getElementById("js_b1").value; 
    // se for > diga que o número é maior
    if (numero_user > aleatorio) {
        let menor = "O número é maior";
        document.getElementById("js_1").innerHTML = menor;
    }
    if (numero_user < aleatorio) {
        let maior = "O número é menor"
        document.getElementById("js_1").innerHTML = maior;
    }
    else {
        let igual = "O número é igual"
        document.getElementById("js_1").innerHTML = igual;
    }
    // se for < diga que o número é maior
    // se for igual diga que é igual

    //x = console.log(numero_user);
    //document.getElementById("")
}
 if (aleatorio != numero_user) {


 }
