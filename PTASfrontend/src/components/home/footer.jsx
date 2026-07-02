import { ClipboardIcon } from "lucide-react"

export default function Footer() {
    return (
        <footer className="flex justify-between items-center text-center py-6 px-6 mx-4 mt-12 border-t">

            <div className="flex items-center flex-row gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600">
                    <ClipboardIcon className="w-6 h-6 text-white" />
                </div>
                <h1 className="font-semibold">Hideiber</h1>
            </div>

            <div>
                <p className="text-gray-400 text-sm">&copy; 2026 Hideiber. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
