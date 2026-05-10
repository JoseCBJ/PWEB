/**
 * @param {{ preventDefault: () => void; }} event
 */
function calcIMC(event){
    event.preventDefault();

    const entAlt = /** @type {HTMLInputElement} */(document.getElementById("numAlt"));
    const entPeso = /** @type {HTMLInputElement} */(document.getElementById("numPeso"));
    const saidaResult = document.getElementById("resultado");
    
    if(!entAlt || !entPeso || !saidaResult) return;

    const altura = Number(entAlt.value) / 100;
    const peso = Number(entPeso.value);

    if(!altura || !peso){
        saidaResult.innerText = "Preencha todos os campos";
        return;
    }

    const imc = peso / (altura * altura);
    let msg = "";

    if(imc < 18.5){
        msg = "Magreza (Grau0)";
    }else if (imc <= 24.9){
        msg = "Normal (Grau 0)";
    }else if (imc <= 29.9){
        msg = "Sobrepeso (Grau 1)";
    }else if (imc <= 39.9){
        msg = "Obesidade (Grau 2)";
    }else{
        msg = "Obesidade Grave (Grau 3)";
    }

    saidaResult.innerText = `Seu IMC é ${imc.toFixed(2)} - ${msg}`;

}
