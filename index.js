import express, { request } from "express";
import * as dotenv from "dotenv";

//habilitar o servidor a ter variável de ambiente
dotenv.config();

//instaciar, chamar, a variável que vai ficar resp pelo servidor -> app
const app = express();

//configurar o servidor para aceitar enviar e receber arquivos em Json
app.use(express.json());

// banco de dados
const bancoDados = [
  {
    name: "Maria",
    age: 35,
    role: "nurse",
    active: true,
    tasks: ["trabalhar"],
  },
];

//CRIAÇÃO DAS ROTAS
app.get("/enap", (request, response) => {
  const bemVindo = "Bem vindo ao servidor";

  return response.status(200).json(bemVindo); //o status 200 é sobre o status do http (ver http cats no google)
});

//criar rota que retorna banco de dados -> rota -> "/all-users" verbo: GET
app.get("/all-user", (request, response) => {
  return response.status().json();
});

// servidor subindo para o ar
// app.listen(8080, process.env.PORT, () => {
//   console.log("App up and running on port http://localhost:8080");
// });

// Como a porta 8080 a aparece é necessário escondê-la, para isso utiliza-se o
// o process que chama a porta no arquivo .env
app.listen(8080, process.env.PORT, () => {
  console.log(
    `App up and running on port http://localhost:${process.env.PORT}`
  );
});
