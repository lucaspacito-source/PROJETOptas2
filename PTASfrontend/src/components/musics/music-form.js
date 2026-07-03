// frontend/src/components/musics/music-form.jsx
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

export default function MusicForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{editing ? "Editar Música" : "Nova Música"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados da música."
              : "Preencha os dados para adicionar uma nova música."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Field>
              <FieldLabel htmlFor="music-title">Título</FieldLabel>
              <Input
                id="music-title"
                placeholder="Ex: Bohemian Rhapsody"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="music-artist">Artista</FieldLabel>
              <Input
                id="music-artist"
                placeholder="Ex: Queen"
                required
                value={form.artist}
                onChange={(e) => setForm({ ...form, artist: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="music-duration">
                Duração (segundos)
              </FieldLabel>
              <Input
                id="music-duration"
                type="number"
                step="1"
                min="1"
                placeholder="180"
                required
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
              />
            </Field>
            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
                {saving
                  ? "Salvando..."
                  : editing
                    ? "Salvar Alterações"
                    : "Criar Música"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}