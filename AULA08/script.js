// API de cachorros

// endereço de api que vamos utilizar 
const url = 'https://dog.ceo/api/breeds/image/random' 

// pegando os elementos do html

// imagem pelo seu ID
const fotocachorro = document.getElementById('fotocachorro')

//botao pelo seu ID
const btnovafoto = document.getElementById('btnovafoto') 

// função para buscar uma nova foto

async function buscarfoto() {
    // fazer uma requisição paar API
    const resposta = await fetch(url); // A chave "}" saiu daqui de cima
    
    // converter a respota da API para JSOn 
    const dados = await resposta.json()

    // mostrar no console.log oq a API retornou
    console.log(dados)

    // alterarmos o enderço da imagem no HTML
    fotocachorro.src = dados.message;
} // A chave "}" foi colocada aqui no final da função!

// botão 
// quando o usuario clicar no botao 
// vamos executar a função buscarfoto()
btnovafoto.addEventListener('click', buscarfoto);

// quando a pagina abrir
// ja buscamos uma foto automaticamente
buscarfoto();
