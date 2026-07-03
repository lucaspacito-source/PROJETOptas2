import { Music } from "lucide-react";

export default function InfoSection() {
    return (
        <div className="flex flex-col items-center gap-3 text-center mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FF8DA1]">
                <Music className="w-7 h-7 text-black" />
            </div>

            <h1 className="text-3xl font-black text-white tracking-tight">
                Pacito Sound
            </h1>
            <p className="text-neutral-400 max-w-xs">
                Crie sua conta e coloque seus serviços no play hoje mesmo.
            </p>
        </div>
    );
}
