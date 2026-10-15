//atribuições
/*
como desenhar:
ctx.beginPath(); abre o desenho
ctx.closePath(); fecha o desenho
ctx.linewidth(); espessura do pincel
ctx.strokestyle(); cor das bordas
ctx.fillstyle(); cor de preenchimento
*/

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 8;
ctx.fillStyle = '#ff00aa';
ctx.strokeStyle = '#b3ff00';
ctx.fillRect(10,10,70,70);
ctx.strokeRect(10,10,70,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#ff00aa';
ctx.strokeStyle = '#b3ff00';
ctx.fillRect(50,50,10,10);
ctx.strokeRect(100,100,10,10); //x, y, tamanho e altura
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#ff00aa';
ctx.strokeStyle = '#b3ff00';
ctx.moveTo(300,300);
ctx.lineTo(60,200);
ctx.lineTo(60,350);
ctx.lineTo(300,350);
ctx.lineTo(300,300);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#ff00aa';
ctx.strokeStyle = '#b3ff00';
ctx.arc(250,250,50,0.95*Math.PI,2.3*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#3d0129';
ctx.strokeStyle = '#f5ffde';
ctx.font = "35px Arial"
ctx.textAlign = "center";
ctx.fillText("Amanhã tem feedback",200,390);
ctx.strokeText("Amanhã tem feedback",200,390)
ctx.closePath();

let canvas_1 = document.getElementById("canvas_1");
let ctx2 = canvas_1.getContext("2d");

ctx2.beginPath();
ctx2.lineWidth = 8;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.fillRect(0,0,70,70);
ctx2.strokeRect(0,0,70,70);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 8;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.fillRect(525,525,70,70);
ctx2.strokeRect(525,525,70,70);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 8;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.fillRect(525,0,70,70);
ctx2.strokeRect(525,0,70,70);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 8;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'yellow';
ctx2.fillRect(0,525,70,70);
ctx2.strokeRect(0,525,70,70);
ctx2.closePath();

// linhas
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,0);
ctx2.lineTo(600,600);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.moveTo(600,0);
ctx2.lineTo(0,600);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,300);
ctx2.lineTo(300,300);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();