import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-center items-center h-150 gap-8 px-4 text-center">

            <div className="flex justigy-center items-center gap-2 bg-gray-200 px-4 py-2 text-xs rounded-full">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <h1>Sistema de gerenciamento profissional</h1>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight max-w-4xl">
                Gerencie seus serviços de forma simples e eficiente
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl">
                Uma plataforma completa para empresas cadastrarem, organizarem e apresentarem seus serviços com todas as informações necessárias.
            </p>

            <div className="flex gap-4">
                <Button className="h-12 bg-purple-600 text-white px-6 py-3 hover:bg-purple-700">
                    <Link href="/signUp">Criar conta gratuita</Link>
                </Button>
                <Button className="h-12 px-6 py-3 hover:bg-gray-500">
                    <Link href="/login">Fazer login</Link>
                </Button>
            </div>
        </section>
    )
}
