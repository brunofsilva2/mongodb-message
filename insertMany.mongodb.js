const database = 'BD3-BRUNO-AULA';

const collection = 'MENSAGENS';

use(database);

db[collection].insertMany(
    [
        { 
          "author": "Bruno",
          "message": "Opa, tomar uma hoje?",
          "data": "12/11/2024",
          "hora": "19:00"
        },
        {
          "author": "Victor",
          "message": "E aí, irmão. Você está bem?",
          "data": "12/11/2024",
          "hora": "19:01"
        },
        {
          "author": "Bruno",
          "message": "Tomar uminha só?",
          "data": "12/11/2024",
          "hora": "19:01"
        },
        {
          "author": "Victor",
          "message": "Pô, estou bem, obrigado por perguntar mano.",
          "data": "12/11/2024",
          "hora": "19:01"
        },
        {
          "author": "Bruno",
          "message": "E aquela geladinha? Vai ter?",
          "data": "12/11/2024",
          "hora": "19:02"
        },
        {
          "author": "Victor",
          "message": "Mano, como estão as coisas em casa? O que está acontecendo?",
          "data": "12/11/2024",
          "hora": "19:02"
        },
        {
          "author": "Bruno",
          "message": "Sabe o que está acontecendo? Vontade de tomar uminha.",
          "data": "12/11/2024",
          "hora": "19:03"
        },
        {
          "author": "Victor",
          "message": "Pô véi, não to te entendendo.",
          "data": "12/11/2024",
          "hora": "19:04"
        },
        {
          "author": "Victor",
          "message": "Não me perguntou se estou bem, como estão as coisas e mal respondeu o que eu te perguntei, o que é isso? Você está com problemas com bebidas?",
          "data": "12/11/2024",
          "hora": "19:05"
        },
        {
          "author": "Bruno",
          "message": "Só quando acaba. Vamo tomar aquela?",
          "data": "12/11/2024",
          "hora": "19:06"
        }
    ]
)