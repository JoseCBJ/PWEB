function testeText() {
    // @ts-ignore
    const nome = document.getElementById("nome").value;
    // @ts-ignore
    const email = document.getElementById("email").value;

    if(nome.length<10){
        alert("O nome deve ter 10 caracteres");
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        const nome = document.getElementById("nome").focus();
        return false;
    }
    
     if(email.length<20){
        alert("O email deve ter 20 caracteres");
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        const nome = document.getElementById("email").focus();
        return false;
    }

    const radioSim = document.getElementById("pesquisaSim");
    const radioNao = document.getElementById("pesquisaNao");

    // @ts-ignore
    if (!radioSim.checked && !radioNao.checked) {
        alert("Por favor, responda à pesquisa!");
        return false;
    }

    // @ts-ignore
    if (radioNao.checked) { 
        alert("Que bom que você voltou a visitar esta página!");
    // @ts-ignore
    } else if (radioSim.checked) {
        alert("Volte sempre à está página!");
    }

    alert("Pesquisa de opinição enviada com sucesso");
}

function limparText(){
    // @ts-ignore
    document.getElementById("nome").value = "";
    // @ts-ignore
    document.getElementById("email").value = "";
    
    
    // @ts-ignore
    document.getElementById("comentario").value = "";

    const radioSim = document.getElementById("pesquisaSim");
    const radioNao = document.getElementById("pesquisaNao");
    // @ts-ignore
    radioSim.checked = false;
    // @ts-ignore
    radioNao.checked = false;
}
