class Conta {
    // @ts-ignore
    constructor(nome, banco, numero, saldo){
        this.nomeUser =nome;
        this.banco=banco;
        this.numConta=numero;
        this.saldo=saldo;
    }
    getNome(){
        return this.nomeUser;
    }
    getBanco(){
        return this.banco;
    }
    getConta(){
        return this.numConta;
    }
    getSaldo(){
        return this.saldo;
    }
}
class Corrente extends Conta{
    // @ts-ignore
    constructor(nome, banco, numero, saldo, saldoEsp){
        super(nome, banco, numero, saldo);
        this.saldoEsp = saldoEsp;
    }
    getSaldoEsp(){
        return this.saldoEsp;
    }
}
class Poupanca extends Conta{
    // @ts-ignore
    constructor(nome, banco, numero, saldo, juros){
        super(nome, banco, numero, saldo);
        this.juros = juros;
    }
    getJuros(){
        return this.juros;
    }
}
function cadastroBanco(){
    // @ts-ignore
    const elNome = document.getElementById("entNnome").value;
    // @ts-ignore
    const elBanco = document.getElementById("entBanco").value;
    // @ts-ignore
    const elNumero = document.getElementById("entNumero").value;
    // @ts-ignore
    const elSaldo = document.getElementById("entSaldo").value;
    // @ts-ignore
    const elTipoConta = document.getElementById("tipoConta").value;

    const outText = document.getElementById("out");

    if(((elNome && elBanco) && (elNumero && elSaldo)) && elTipoConta){
        // @ts-ignore
        // @ts-ignore
        const numeroBanco = parseInt(elNumero.value);
        // @ts-ignore
        const valSaldo = parseFloat(elSaldo.value);

        if(elTipoConta==="corrente"){
            // @ts-ignore
            const especial = parseFloat(document.getElementById("saldoEspec").value);
            const contaCorrente = new Corrente(elNome, elBanco, elNumero, valSaldo, 150);
        
            // @ts-ignore
            outText.innerText = `A conta numero ${contaCorrente.getNome} de numero: ${contaCorrente.getConta} tem um saldo de: ${contaCorrente.getSaldo} e tem saldo especial de: ${contaCorrente.getSaldoEsp}`;
        }
        else{
            // @ts-ignore
            const juros = parseFloat(document.getElementById("juros").value);
            const contaPoupança = new Poupanca(elNome, elBanco, elNumero, valSaldo, 15);
        
            // @ts-ignore
            outText.innerText = `A conta numero ${contaPoupança.getNome} de numero: ${contaPoupança.getConta} tem um saldo de: ${contaPoupança.getSaldo} e juros de de: ${contaPoupança.getJuros}`;
        }
    }
}