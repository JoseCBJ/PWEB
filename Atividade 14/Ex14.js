function convertMai(){
    // @ts-ignore
    const palavra = document.getElementById("palavra").value;
    const outTxt = document.getElementById("outTxt");
    // @ts-ignore
    if(document.getElementById("palavra").value==""){
        alert("Preencha o campo PALAVRA corretamente!");
        // @ts-ignore
        document.getElementById("palavra").focus();
        return false;
    }
    else{
        const novaPalavra = palavra.toUpperCase();
        // @ts-ignore
        outTxt.textContent = novaPalavra;
    }
}

function convertMin(){
    // @ts-ignore
    const palavra = document.getElementById("palavra").value;
    const outTxt = document.getElementById("outTxt");
    // @ts-ignore
    if(document.getElementById("palavra").value==""){
        alert("Preencha o campo PALAVRA corretamente!");
        // @ts-ignore
        document.getElementById("palavra").focus();
        return false;
    }
    else{
        const novaPalavra = palavra.toLowerCase();
        // @ts-ignore
        outTxt.textContent = novaPalavra;
    }
}