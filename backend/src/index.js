import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

// DEBUG
console.log("DATABASE_URL:", process.env.DATABASE_URL);

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Prisma 7 (sem datasources)
const prisma = new PrismaClient();

// Teste de conexão
prisma.$connect()
  .then(() => console.log("✅ Banco conectado"))
  .catch((err) => console.error("❌ Erro ao conectar:", err));

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Rota principal
app.get("/", (req, res) => {
  res.json({
    message: "🚀 MinURL API rodando!",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      docs: "/api/docs",
    },
  });
});

// Teste de leitura no banco
app.get("/db-test", async (req, res) => {
  try {
    const result = await prisma.user.findMany();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no banco" });
  }
});

// 🔥 Teste de escrita (criar usuário)
app.get("/create-user", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Lucas",
        email: `lucas${Date.now()}@email.com`, // evita duplicado
      },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// Start servidor
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});