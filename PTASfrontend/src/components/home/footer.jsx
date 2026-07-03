import { ClipboardIcon } from "lucide-react"

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-center py-8 px-6 md:px-10 mt-12 bg-black border-t border-white/10">

            <div className="flex items-center flex-row gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FF8DA1]">
                    <ClipboardIcon className="w-5 h-5 text-black" />
                </div>
                <h1 className="font-extrabold text-white">Pacito Sound</h1>
            </div>

            <div>
                <p className="text-neutral-500 text-sm">&copy; 2026 Pacito Sound. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
