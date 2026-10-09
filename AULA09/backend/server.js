// NOOSSA API DE CACHORROS

// agora as fotos não sao mais baixadas automaticamentes
// eles devem existir manualmente na pasta  
// data/fotos

// rotas:
// get / api/cachorros/aleatorio
// get/ api/cachorros/:raca

// importar o framework express para criar o servidor 
const express = require ("express");
// import o CORS para permitir requisição de outros dominios (ex: front-end)
const cors = require("cors");
// importar o modulo de arquivos NODE 
const fs = requiere("fs")
// importar a utilidades para trabalhar com caminho de arquivos
const path = require ("path");
// Impostar o aqrquivo JSON que contem as raças e fotos 
const cachorros = require ("./data/dogs.json")
// criar a aplicação Express 
const app = express();
// definir a porta q o servidor vai funcionar
const PORT = 3000;
// habilitar o suo de cors na aplicaçõa 
app.use(cors());


//servidor arquivos estaticos

// nos falamos para o express 
// tudo o que estiver na pasta data/fotos pode ser acessada pela URL /fotos
// EXEMPLO
// http://local/localhost:300/fotos/husk/1.jpg

app.use(
    "/fotos",
    express.static(
    path.join(__dirname,"data/fotos") //camiho real da pasta do servidor
    )
)


    // funçõa auxiliar
    // função qeu recebe array e retorna um item aleatorio dele
    function sortear (array){
     // gera um numero aleatorio entre 0 e o tamanho de array 
    // gera um numero aleatório entre 0 e o tamanho do array
    // array.length - conta quantos itens existem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() * array.length - Multiplica o número sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredondando para baixo.
    
    const i = Math.floor(Math.ranfom) * array.lenght
    // const i = guara a posição na variavel i 
     // retorna um  item sorteado
        return array [1];

    }

    
