/*  CRIAÇÃO DE LISTAS

let idades = [18, 19, 20];
console.log(idades);
idades.push(21); //adiciona
console.log(idades);
// idades.delete[indice]   valo especifico
idades.pop(); // remove o último item da lista
console.log(idades);  

*/
/*
let retangulo = {
    x:10,
    y:10,
    altura:50,
    largura:50,
    cor1: "blue",
    cor2:"red",
}*/

class retangulo {
    constructor (x, y, l, a, c1, c2) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.a = a;
        this.c1 = c1;
        this.c2 = c2;
    }
    desenha() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = this.c1;
        ctx.strokeStyle = this.c2;
        ctx.strokeRect(this.x, this.y, this.l, this.a);
        ctx.fillRect(this.x, this.y, this.l, this.a);
        ctx.closePath();
    }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let r1 = new retangulo(10,10,50,50, "pink", "purple");
let r2 = new retangulo(60,60,100,100, "black", "yellow");
let r3 = new retangulo(160,170,50,50, "pink", "purple");
let r4 = new retangulo(210,60,100,100, "black", "yellow");
let r5 = new retangulo(310,10,50,50, "pink", "purple");
r1.desenha();
r2.desenha();
r3.desenha();
r4.desenha();
r5.desenha();

let auxiliar = 1;
function animacao() {
    //apaga canvas
    ctx.clearRect(0,0, 400, 400);
    //move objeto
    if(r1.x ==350){
        auxiliar = -1;
    }
    if (r1.x == 0){
        auxiliar = +1;
    }
    r1.x += auxiliar;
    //desenha novamente 
    r1.desenha();
    r3.desenha();
    requestAnimationFrame(animacao);

}
animacao();

document.addEventListener("keydown", function(evento) {
    console.log(evento);
    if (evento.key == "ArrowUp"){r1.y -= 1};
    if (evento.key == "ArrowDown"){r1.y += 1};
    if (evento.key == "ArrowLeft"){r1.y -= 1};
    if (evento.key == "ArrowRight"){r1.y += 1};

})

document.addEventListener("mousemove", function(evento) {
    console.log(evento);
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    r3.x = x_mouse;
    r3.y = y_mouse

})