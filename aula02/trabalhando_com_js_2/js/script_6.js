// Função para imprimir uma mensagem
function imprimirMensagem() {
    var mensagem = document.createElement("p"); // Criando um elemento <p>
    mensagem.id = "minhaMensagem";               // Atribuindo um ID ao elemento
    mensagem.textContent = "Esta é a mensagem que será exibida para o usuário, mesmo não estando escrita diretamente no HTML!"; // Adicionando texto ao elemento
    document.body.appendChild(mensagem);         // Adicionando o elemento ao corpo do documento
}

// Função para alterar a formatação da mensagem
function alterarFormatacao() {
    var mensagem = document.getElementById("minhaMensagem"); // Selecionando o elemento pelo ID
    mensagem.style.fontSize = "24px";    // Tamanho da fonte maior
    mensagem.style.fontWeight = "bold";  // Negrito
    mensagem.style.color = "red";        // Cor vermelha
}

// Chamando as funções
imprimirMensagem();
alterarFormatacao();
