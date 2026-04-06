const num1=parseFloat(prompt("Digite o primeiro numero"));
const num2=parseFloat(prompt("Digite o segundo numero"));

let soma=(num1+num2);
let sub=(num1-num2);
let mult=(num1*num2);
let div1=(num1/num2);
let div2=(num2/num1);

alert("O valor da soma é "+soma.toFixed(2));
alert("O valor da subtração é "+sub.toFixed(2));
alert("O valor da multiplicação é "+mult.toFixed(2));
alert("O valor da divisão do primeiro pelo segundo é "+div1.toFixed(2));
alert("O valor da divisão do segundo pelo primeiro é "+div2.toFixed(2));