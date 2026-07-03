import Link from "next/link";
import { Button } from "../ui/button";
import { ClipboardIcon } from "lucide-react";

export default function TopbarHeader() {
    return (
        <header className="flex justify-between items-center px-6 md:px-10 h-20 bg-black sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF8DA1]">
                    <ClipboardIcon className="w-5 h-5 text-black" />
                </div>
                <h1 className="text-xl font-extrabold tracking-tight text-white">Pacito Sound</h1>
            </div>

            <div className="flex justify-center items-center gap-2 md:gap-4">
                <Button variant="ghost" className="rounded-full text-white hover:bg-white/10 hover:text-white font-bold px-5 h-11">
                    <Link href="/login">Entrar</Link>
                </Button>
                <Button className="rounded-full bg-[#FF8DA1] text-black h-11 px-6 font-bold hover:bg-[#FF6F8D] hover:scale-105 transition-transform">
                    <Link href="/signUp">Inscreva-se grátis</Link>
                </Button>
            </div>
        </header>
    )
}
