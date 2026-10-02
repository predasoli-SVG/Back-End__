// Selecionados por ID 
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagemteste = document.getElementById("imagemteste");

// Selecionado por classe
let caixas = document.getElementsByClassName("box");

// Mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagemteste);

// FUNÇÃO PARA ALTERAR O CONTÉUDO DO HTML
function alterar() {
  titulo.innerHTML = "Jarvis possuiu o mundo 👌";
  subtitulo.innerHTML = "Jarvis é um sistema de inteligência artificial criado por Tony Stark, o Homem de Ferro, nos quadrinhos e filmes da Marvel. Ele é capaz de realizar diversas tarefas, como controlar a tecnologia da casa de Stark, auxiliar em missões e até mesmo lutar ao lado do herói.";
  paragrafo.innerHTML = "Novo Parágrafo";

  // AGORA ESTÃO DENTRO DA FUNÇÃO: Só vão rodar ao clicar no botão
  caixas[0].innerHTML = "primeiro paragrafo alterado";
  caixas[1].innerHTML = "segundo paragrafo alterado";

  // Altera a imagem apenas no clique
  imagemteste.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKmwrk-9b1zdul5RJ53nE37dtttedWpRwzzUbfkOiDPf1qIi6gFx-cwY&s=10";
}       
