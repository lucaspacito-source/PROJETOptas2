import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-center items-center gap-8 px-4 py-24 md:py-32 text-center bg-gradient-to-b from-[#FF8DA1]/25 via-black to-black">

            <div className="flex justify-center items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 text-xs font-bold rounded-full text-white uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-[#FF8DA1]" />
                <span>Feito para o seu negócio bater a nota certa</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl text-white tracking-tight">
                Coloque seus serviços <span className="text-[#FF8DA1]">no play</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
                Organize, precifique e apresente tudo o que sua empresa oferece em um só lugar.
                Sem complicação, sem ruído — só o essencial, na medida certa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-14 rounded-full bg-[#FF8DA1] text-black px-8 text-base font-bold hover:bg-[#FF6F8D] hover:scale-105 transition-transform">
                    <Link href="/signUp">Comece de graça</Link>
                </Button>
                <Button variant="outline" className="h-14 rounded-full border-2 border-white/40 bg-transparent text-white px-8 text-base font-bold hover:border-white hover:bg-white/10">
                    <Link href="/login">Já tenho conta</Link>
                </Button>
            </div>
        </section>
    )
}
