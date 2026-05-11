// @ts-ignore
function Retangulo(x, y){
    this.base =x;
    this.altura=y;
    this.calcularArea = function() {
        return this.base * this.altura;
    }
}

function execCalculo(){
    const elBase = document.getElementById("elBase");
    const elAlt = document.getElementById("elbase");
    const outDados = document.getElementById("outArea");

    if(elBase && elAlt && outDados){
        // @ts-ignore
        const base = parseFloat(elBase.value);
        // @ts-ignore
        const altura = parseFloat(elAlt.value);

        const objRet = new Retangulo(base, altura);

        const area = objRet.calcularArea();

        outDados.innerText = `A area do retangulo é de ${area} unidades quadradas`;
    }
}