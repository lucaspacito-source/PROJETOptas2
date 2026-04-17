import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API rodando" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("Banco conectado");
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  } catch (error) {
    console.error("Erro ao conectar no banco", error);
  }
});