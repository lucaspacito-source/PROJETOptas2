// frontend/src/components/musics/card-music.jsx
import { Music as MusicIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function formatDuration(seconds) {
  const s = Number(seconds) || 0;
  const min = Math.floor(s / 60);
  const sec = String(s % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

export default function CardMusic({ music }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          <MusicIcon className="size-4 text-muted-foreground" />
          <CardTitle className="text-xl">{music.title}</CardTitle>
        </div>
        <CardDescription className="text-base">{music.artist}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
        <span>⏱ Duração: {formatDuration(music.duration)}</span>
      </CardContent>
    </Card>
  );
}