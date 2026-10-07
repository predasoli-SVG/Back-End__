// JSON signfica JavaScript object notation e é um formato de representação e troca de dados

JSON é um ficha de cadastro

FICHA FÍSICA:       JSON:
nome: joão          "nome": "joão"
idade: 25           "idade": 25
cidade: SP          "cidade": "SP"

É formato para organizar os dados


{
    "cachorro":{
        "nome": "rex",
        "idade":3,
        "raca": "Labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola","osso","frisbee"],
        "dono":{
            "nome":"joão",
            "telefone":"1199999999"
            
        }
    }

}


//string = texto - sempre com aspas
 "nome": "rex",

 //number, numero - sem aspas
 "idade":3,

 //bolean (true/false)
 "vacinado": true,

 //ARRAY (lista)- com colchetes
 "brinquedos": ["bola","osso","frisbee"],

 //OBJETOS - com chaves
  "dono":{
            "nome":"joão",
            "telefone":"1199999999"
            
        }

//NULL (vazio)
"dataFalecimento": null
