const elementoREsposta = document.querySelector('#resposta')

const inputPergunta = document.querySelector('#inputPergunta')

const botaoPerguntar = document.querySelector('#botaoPerguntar')

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",



]

// clicar em fazer pergunta
function fazerPergunta() {

  if (inputPergunta.value == "") {
    alert('Digite sua perguta!')
    return
  }

  botaoPerguntar.setAttribute('disabled', true)
  
  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //  gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
 elementoREsposta.innerHTML = pergunta + respostas[numeroAleatorio]
 
 elementoREsposta.style.opacity = 1;
// Sumir a resposta depois de 3s
setTimeout(function() {
  elementoREsposta.style.opacity = 0;
  botaoPerguntar.removeAttribute('disabled')
}, 3000 )
}





