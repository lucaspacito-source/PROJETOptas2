import { CircleCheck } from "lucide-react"

export default function BenefitsList() {
    return (
        <section className="flex flex-col justify-center items-center gap-12 bg-purple-50 mx-8 my-8 rounded-xl py-12 px-6">

            <h1 className="text-3xl font-bold">Por que escolher o Hideiber?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold">
                        <div className="rounded-full bg-purple-100 p-1">
                            <CircleCheck className="w-5 h-5 text-purple-500" />
                        </div>
                        <h1>Interface intuitiva</h1>
                    </div>
                    <p className="text-gray-600">Design limpo e fácil de usar, sem complicações</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold">
                        <div className="rounded-full bg-purple-100 p-1">
                            <CircleCheck className="w-5 h-5 text-purple-500" />
                        </div>
                        <h1>Organização profissional</h1>
                    </div>
                    <p className="text-gray-600">Mantenha todos os seus serviços bem estruturados</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold">
                        <div className="rounded-full bg-purple-100 p-1">
                            <CircleCheck className="w-5 h-5 text-purple-500" />
                        </div>
                        <h1>Acesso rápido</h1>
                    </div>
                    <p className="text-gray-600">Encontre e edite informações em segundos</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold">
                        <div className="rounded-full bg-purple-100 p-1">
                            <CircleCheck className="w-5 h-5 text-purple-500" />
                        </div>
                        <h1>Sempre disponível</h1>
                    </div>
                    <p className="text-gray-600">Acesse de qualquer lugar, a qualquer momento</p>
                </div>
            </div>
        </section>
    )
}
