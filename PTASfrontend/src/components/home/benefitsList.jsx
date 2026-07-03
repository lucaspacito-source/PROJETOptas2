import { CircleCheck } from "lucide-react"

export default function BenefitsList() {
    return (
        <section className="flex flex-col justify-center items-center gap-12 bg-[#121212] mx-4 md:mx-10 my-8 rounded-3xl py-16 px-6">

            <h2 className="text-3xl md:text-4xl font-black text-white text-center">Por que sua empresa vai curtir o Pacito Sound</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 font-bold text-white text-lg">
                        <div className="rounded-full bg-[#FF8DA1]/20 p-1.5">
                            <CircleCheck className="w-5 h-5 text-[#FF8DA1]" />
                        </div>
                        <h3>Interface sem fricção</h3>
                    </div>
                    <p className="text-neutral-400 pl-9">Um visual limpo e direto, pensado para você não perder o ritmo.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 font-bold text-white text-lg">
                        <div className="rounded-full bg-[#FF8DA1]/20 p-1.5">
                            <CircleCheck className="w-5 h-5 text-[#FF8DA1]" />
                        </div>
                        <h3>Tudo em ordem</h3>
                    </div>
                    <p className="text-neutral-400 pl-9">Seus serviços organizados como uma playlist bem montada.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 font-bold text-white text-lg">
                        <div className="rounded-full bg-[#FF8DA1]/20 p-1.5">
                            <CircleCheck className="w-5 h-5 text-[#FF8DA1]" />
                        </div>
                        <h3>Acesso instantâneo</h3>
                    </div>
                    <p className="text-neutral-400 pl-9">Encontre e edite qualquer informação em poucos segundos.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 font-bold text-white text-lg">
                        <div className="rounded-full bg-[#FF8DA1]/20 p-1.5">
                            <CircleCheck className="w-5 h-5 text-[#FF8DA1]" />
                        </div>
                        <h3>Disponível sempre</h3>
                    </div>
                    <p className="text-neutral-400 pl-9">Acesse de onde estiver, quando quiser, sem pausas.</p>
                </div>
            </div>
        </section>
    )
}
