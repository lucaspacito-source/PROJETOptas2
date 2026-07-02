import Link from "next/link";
import { Button } from "../ui/button";
import { ClipboardIcon } from "lucide-react";


export default function TopbarHeader() {
    return (
        <header className="flex justify-between items-center px-6 h-16 border-b">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600">
                    <ClipboardIcon className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold">Hideiber</h1>
            </div>

            <div className="flex justify-center items-center gap-4">
                <Button variant="outline" className="border-0"> <Link href="/login">Entrar</Link> </Button>
                <Button className="bg-purple-600 text-white h-10 hover:bg-purple-700">
                    <Link href="/signUp">Começar agora</Link>
                </Button>
            </div>
        </header>
    )
}
