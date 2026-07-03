// src/models/music.model.js
import { prisma } from "../lib/prisma.js";

export async function listarMusicas(userId) {
  return prisma.music.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export async function buscarMusicaPorId(id, userId) {
  return prisma.music.findFirst({
    where: { id: Number(id), userId },
  });
}

export async function criarMusica(data) {
  return prisma.music.create({ data });
}

export async function atualizarMusica(id, data) {
  return prisma.music.update({ where: { id: Number(id) }, data });
}

export async function deletarMusica(id) {
  return prisma.music.delete({ where: { id: Number(id) } });
}