// Importa as bibliotecas do express
import express, { Express, Request, Response } from "express";
// Importa a biblioteca dotenv para ler o arquivo .env
import dotenv from "dotenv";
// Importa o endpoint
import { handlePetRequest } from "./endpoints/pets";
import { getFirebaseAdmin } from "./firebase";

// Inicializa o framework de configuração
dotenv.config();

// Inicializa firebase 
getFirebaseAdmin();

// Cria uma instância servidor com express
const serverApp: Express = express();
const port = 3000;

// Middleware para analisar o corpo da solicitação JSON
serverApp.use(express.json());

// Endpoint test
serverApp.get('/api/example', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo ao PetLovers server!' });
});

// endpoint pets
serverApp.post("/api/pet", handlePetRequest);

// Prepara o servidor para iniciar na porta
serverApp.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});