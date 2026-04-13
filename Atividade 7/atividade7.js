
function jogar(escolhaUsuario) {
            
            var opcoes = ['pedra', 'papel', 'tesoura'];
            var escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

            var mensagem = "Você escolheu: " + escolhaUsuario + "<br>";
            mensagem += "O computador escolheu: " + escolhaComputador + "<br><br>";

            if (escolhaUsuario === escolhaComputador) {
                mensagem += "Resultado: EMPATE! 🤝";
            } else if (
                (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
                (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
                (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')) {
                    mensagem += "Resultado: VOCÊ VENCEU! 🎉";
                } else {
                    mensagem += "Resultado: VOCÊ PERDEU! ❌";
                }

            document.getElementById('resultado').innerHTML = mensagem;
        }