import { ClipboardIcon } from "lucide-react";

export default function InfoSection() {
    return (
        <section className="bg-purple-100 h-full flex items-center justify-center pb-10">
            <div className="flex flex-col gap-6 p-8">

                <div className="flex items-center justify-center w-15 h-15 rounded-full bg-purple-600">
                    <ClipboardIcon className="w-6 h-6 text-white" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Comece a organizar seus serviços hoje
                    </h1>
                    <p className="mt-2 text-gray-700">
                        Crie sua conta e tenha acesso a todas as ferramentas necessárias para gerenciar seus serviços de forma profissional.
                    </p>
                </div>

                <ul className="flex flex-col gap-2 text-purple-800 list-disc list-inside md:gap-4">
                    <li>Cadastro gratuito e sem complicações</li>
                    <li>Gerencie tempo, valores e descontos</li>
                    <li>Acesso instantâneo após o cadastro</li>
                </ul>
            </div>
        </section>
    );
}
