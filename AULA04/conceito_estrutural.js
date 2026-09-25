// estrutura condicionais (tomando decisões)
// as estruturas condicionais permitem excultar diferentes blocos de codigo depende de uma condição

// if/else
// if - verificar se um condição é verdaddeira e executa o codigo dentro dele, se a condição fir falsa 
// o else pode executar outrio bloco de codigo 

let idade = 12

if(idade >= 18){
console.log("você é maior de idade")
} else {
    console.log ("você é menor de idade")
}

// IF, ELSE IF, ELSE (mutiplas condições)
let idade2 = 15;

if(idade2 < 12){
    console.log("você é uma criança 👶");
} else if (idade2 < 18){
    console.log("você é um adolecente 🧒")
} else {
    console.log ("você é um adulto 🏆")
}
