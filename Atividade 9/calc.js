

/**
 * @param {{ preventDefault: () => void; }} event
 * 
 */
function verMaiorNumero(event){
    event.preventDefault();
    
    // @ts-ignore
    const num1 = document.getElementById("num1")?.value;
    // @ts-ignore
    const num2 = document.getElementById("num2").value;
    // @ts-ignore
    const num3 = document.getElementById("num3").value;

    const numMaior = Math.max(num1, num2, num3);
    
    alert(`O maior valor é: ${numMaior}`);
}

/**
 * @param {{ preventDefault: () => void; }} event
 */
function verOdemCrescente(event){
    event.preventDefault();
    // @ts-ignore
    const num4 = document.getElementById("num4").value;
    // @ts-ignore
    const num5 = document.getElementById("num5").value;
    // @ts-ignore
    const num6 = document.getElementById("num6").value;

    let listaNum = [num4, num5, num6];

    listaNum.sort((a, b)=>a-b);
    alert(`Números em ordem crescente: ${listaNum.join(", ")}`);
}
/**
 * @param {{ preventDefault: () => void; }} event
 */
function verPalindromo(event){
    event.preventDefault();
    // @ts-ignore
    let palavra = (document.getElementById("palavPalin"));
    
    // @ts-ignore
    let palavraOriginal = palavra.value.toLowerCase().trim();

    // @ts-ignore
    const palavraInvert = palavraOriginal.split('').reverse().join('');

    // @ts-ignore
    if(palavraOriginal===""){
        alert("Digite uma palavra");
    }
    else if(palavraOriginal===palavraInvert){
        alert(`A palavra "${palavraOriginal}" é um palindromo.`);
    }else
        alert(`A palavra "${palavraOriginal}" não é um palindromo.`);
    
}
/**
 * @param {{ preventDefault: () => void; }} event
 */
function palavraSubConj(event){
    event.preventDefault();
    
    const palavraPai = (document.getElementById("palav2"));
    const palavraFilho = (document.getElementById("palav1"));

    // @ts-ignore
    const palavPrinc = palavraPai.value.toLowerCase();
    // @ts-ignore
    const subPalavra = palavraFilho.value.toLowerCase();

    if(subPalavra === ""){
        alert("Digite um termo de busca");
    }else if(palavPrinc.includes(subPalavra)){
        alert(`Sim, "${subPalavra}" faz parte de "${palavPrinc}"`);
    }else 
        alert(`Sim, "${subPalavra}" não faz parte de "${palavPrinc}"`);
}
/**
 * @param {{ preventDefault: () => void; }} event
 */
function verDiaSemana(event){
    event.preventDefault();

    // @ts-ignore
    const dataN = /** @type {HTMLInputElement} */document.getElementById("data");

    // @ts-ignore
    if (!dataN || !dataN.value) {
        alert("Por favor, selecione uma data!");
        return;
    }
   // @ts-ignore
   const dataObjeto = new Date(dataN.value + 'T00:00:00');

    const nomeDia = dataObjeto.toLocaleDateString('pt-BR', { weekday: 'long' });
    alert(`O dia é ${nomeDia}`);
}
