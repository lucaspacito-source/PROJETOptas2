// src/routes/music.routes.js
import { Router } from "express";
import * as MusicController from "../controllers/music.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

// Todas as rotas exigem login: cada usuário só acessa suas próprias músicas
router.get("/", requireAuth, MusicController.listar);
router.get("/:id", requireAuth, MusicController.buscar);
router.post("/", requireAuth, MusicController.criar);
router.put("/:id", requireAuth, MusicController.atualizar);
router.delete("/:id", requireAuth, MusicController.deletar);

export default router;