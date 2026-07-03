// src/controllers/music.controller.js
import * as MusicModel from "../models/music.model.js";

// GET /api/musics
export async function listar(req, res) {
  try {
    const musicas = await MusicModel.listarMusicas(req.user.id);
    return res.json(musicas);
  } catch (err) {
    console.error("Erro ao listar músicas:", err);
    return res.status(500).json({ error: "Erro ao listar músicas." });
  }
}

// GET /api/musics/:id
export async function buscar(req, res) {
  try {
    const id = req.params.id;
    const musica = await MusicModel.buscarMusicaPorId(id, req.user.id);
    if (!musica) {
      return res.status(404).json({ error: "Música não encontrada." });
    }
    return res.json(musica);
  } catch (err) {
    console.error("Erro ao buscar música:", err);
    return res.status(500).json({ error: "Erro ao buscar música." });
  }
}

// POST /api/musics
export async function criar(req, res) {
  try {
    const { title, artist, duration } = req.body;

    if (!title || !artist || duration == null) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const musica = await MusicModel.criarMusica({
      title,
      artist,
      duration,
      userId: req.user.id,
    });
    return res.status(201).json(musica);
  } catch (err) {
    console.error("Erro ao criar música:", err);
    return res.status(500).json({ error: "Erro ao criar música." });
  }
}

// PUT /api/musics/:id
export async function atualizar(req, res) {
  try {
    const id = req.params.id;
    const { title, artist, duration } = req.body;

    // buscarMusicaPorId já filtra por userId, então isso também
    // garante que o usuário só edite as próprias músicas
    const musica = await MusicModel.buscarMusicaPorId(id, req.user.id);
    if (!musica) {
      return res.status(404).json({ error: "Música não encontrada." });
    }

    const atualizada = await MusicModel.atualizarMusica(id, {
      title,
      artist,
      duration,
    });
    return res.json(atualizada);
  } catch (err) {
    console.error("Erro ao atualizar música:", err);
    return res.status(500).json({ error: "Erro ao atualizar música." });
  }
}

// DELETE /api/musics/:id
export async function deletar(req, res) {
  try {
    const id = req.params.id;

    const musica = await MusicModel.buscarMusicaPorId(id, req.user.id);
    if (!musica) {
      return res.status(404).json({ error: "Música não encontrada." });
    }

    await MusicModel.deletarMusica(id);
    return res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar música:", err);
    return res.status(500).json({ error: "Erro ao deletar música." });
  }
}