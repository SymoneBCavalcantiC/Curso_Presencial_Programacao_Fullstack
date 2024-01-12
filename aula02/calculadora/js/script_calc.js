let operacaoEscolhida = null;

// Função para definir a operação
function definirOperacao(operacao) {
    operacaoEscolhida = operacao;
}

// Função para calcular o resultado
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    switch (operacaoEscolhida) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Divisão por zero!";
            }
            break;
        default:
            resultado = "Ação inválida!";
            break;
    }

    document.getElementById('resultado').value = resultado;
}

// Função para limpar os campos e a operação
function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').value = '';
    operacaoEscolhida = null;
}