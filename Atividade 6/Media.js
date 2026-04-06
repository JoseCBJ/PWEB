const nome=prompt("Qual é o seu nome");
const resultado1=parseFloat(prompt("Qual é a nota da primeira prova"));
const resultado2=parseFloat(prompt("Qual é a nota da segunda prova"));
const resultado3=parseFloat(prompt("Qual é a nota da terceira prova"));
const resultado4=parseFloat(prompt("Qual é a nota da quarta prova"));

let media=((resultado1+resultado2+resultado3+resultado4)/4);
alert(media.toFixed(2));