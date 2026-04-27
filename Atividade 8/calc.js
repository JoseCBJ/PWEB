let somaIdades = 0;
let qtdeRespostas = 0;
let pessMaisVelha = -Infinity;
let pessMaisNova = Infinity;
let respostaPessimo = 0;
let respostasOtimasBoas = 0;
let numMulheres = 0, numHomens = 0, numOutros = 0;

function receberPesquisa(event) {
    event.preventDefault();

    const idadeInput = document.getElementById("idade").value;
    const idade = parseInt(idadeInput);
    const sexoElement = document.querySelector('input[name=sexo]:checked');
    const notaElement = document.querySelector('input[name=nota]:checked');

    if (!idadeInput || !sexoElement || !notaElement) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const sexo = sexoElement.value;
    const nota = parseInt(notaElement.value);

    qtdeRespostas++;
    somaIdades += idade;
    
    if (idade > pessMaisVelha) pessMaisVelha = idade;
    if (idade < pessMaisNova) pessMaisNova = idade;
    
    if (nota === 1) respostaPessimo++;
    if (nota === 3 || nota === 4) respostasOtimasBoas++;

    if (sexo === "m") numHomens++;
    else if (sexo === "f") numMulheres++;
    else numOutros++;

    if (qtdeRespostas === 45) {
        exibirResultados();
    }

    document.querySelector("form").reset();
}

function exibirResultados() {
    const media = somaIdades / 45;
    const porcentagemBomOtimo = (respostasOtimasBoas / 45) * 100;

    alert(`--- Resultados da Pesquisa ---
    Média de Idade: ${media.toFixed(2)}
    Mais Velho: ${pessMaisVelha} anos
    Mais Novo: ${pessMaisNova} anos
    Péssimo (Quantidade): ${respostaPessimo}
    Bom/Ótimo (Porcentagem): ${porcentagemBomOtimo}%
    Homens: ${numHomens} | Mulheres: ${numMulheres} | Outros: ${numOutros}`);
}