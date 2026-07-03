"use client";

// frontend/src/app/dashboard/musics/page.jsx
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Skeleton } from "../../../components/ui/skeleton";
import { Plus } from "lucide-react";
import CardMusicAdmin from "../../../components/musics/card-music-admin";
import MusicForm from "../../../components/musics/music-form";

const API = "http://localhost:5500/api/musics";

const EMPTY_FORM = {
  title: "",
  artist: "",
  duration: "",
};

export default function MusicsAdmin() {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // id da música a deletar

  useEffect(() => {
    fetchMusics();
  }, []);

  async function fetchMusics() {
    setLoading(true);
    try {
      const res = await fetch(API, { credentials: "include" });

      if (!res.ok) {
        console.error("Erro ao buscar músicas, status:", res.status);
        setMusics([]);
        return;
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setMusics(data);
      } else {
        console.error("Resposta inesperada da API de músicas:", data);
        setMusics([]);
      }
    } catch (err) {
      console.error("Erro ao buscar músicas:", err);
      setMusics([]);
    } finally {
      setLoading(false);
    }
  }

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setError("");
    setSheetOpen(true);
  }

  function openEdit(music) {
    setEditing(music);
    setForm({
      title: music.title,
      artist: music.artist,
      duration: String(music.duration),
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      title: form.title,
      artist: form.artist,
      duration: Number(form.duration),
    };

    try {
      const res = await fetch(editing ? `${API}/${editing.id}` : API, {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        let message = "Erro ao salvar música.";
        try {
          const data = await res.json();
          message = data.error ?? message;
        } catch {
          message = `Erro ao salvar música (status ${res.status}).`;
        }
        console.error("Erro ao salvar música:", res.status, message);
        setError(message);
        return;
      }

      setSheetOpen(false);
      fetchMusics();
    } catch (err) {
      console.error("Falha inesperada ao salvar música:", err);
      setError("Não foi possível conectar ao servidor. Tente novamente.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        console.error("Erro ao excluir música:", res.status);
      }
    } catch (err) {
      console.error("Falha inesperada ao excluir música:", err);
    } finally {
      setConfirmDelete(null);
      fetchMusics();
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Músicas</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Nova Música
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : musics.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhuma música cadastrada ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {musics.map((music) => (
            <CardMusicAdmin
              key={music.id}
              music={music}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <MusicForm
        editing={editing}
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        saving={saving}
        error={error}
      />
    </div>
  );
}