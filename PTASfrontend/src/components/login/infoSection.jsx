import { ClipboardIcon } from "lucide-react";

export default function InfoSection() {
    return (
        <section className="bg-purple-100 h-screen flex items-center justify-center">
            <div className="flex flex-col gap-6 p-8">

                <div className="flex items-center justify-center w-15 h-15 rounded-full bg-purple-600">
                    <ClipboardIcon className="w-6 h-6 text-white" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Gerencie seus serviços com facilidade
                    </h1>
                    <p className="mt-2 text-gray-700">
                        Acesse sua plataforma e mantenha todos os seus serviços organizados em um só lugar.
                    </p>
                </div>

                <ul className="flex flex-col gap-2 text-purple-800 list-disc list-inside md:gap-4">
                    <li>Cadastro rápido e intuitivo</li>
                    <li>Controle total dos seus dados</li>
                    <li>Interface profissional e moderna</li>
                </ul>
            </div>
        </section>
    );
}
