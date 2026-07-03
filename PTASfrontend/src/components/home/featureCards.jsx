import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ClipboardIcon, Clock, DollarSign } from "lucide-react";

export default function FeatureCards() {
    return (
        <section className="bg-black px-6 md:px-10 py-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Feito sob medida para você</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <Card className="h-72 bg-[#181818] border-0 rounded-2xl hover:bg-[#282828] transition-colors cursor-pointer group">
                    <CardHeader className="flex flex-col gap-4">
                        <div className="rounded-full bg-[#FF8DA1] p-3 w-fit group-hover:scale-110 transition-transform">
                            <ClipboardIcon className="w-8 h-8 text-black" />
                        </div>
                        <CardTitle className="text-xl text-white">Catálogo completo</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-neutral-400">
                        Cadastre cada serviço com descrição, valores e detalhes — tudo organizado em uma única playlist de informações.
                    </CardContent>
                </Card>

                <Card className="h-72 bg-[#181818] border-0 rounded-2xl hover:bg-[#282828] transition-colors cursor-pointer group">
                    <CardHeader className="flex flex-col gap-4">
                        <div className="rounded-full bg-[#FF8DA1] p-3 w-fit group-hover:scale-110 transition-transform">
                            <Clock className="w-8 h-8 text-black" />
                        </div>
                        <CardTitle className="text-xl text-white">No seu ritmo</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-neutral-400">
                        Defina prazos e acompanhe o tempo de execução de cada serviço para manter tudo no compasso certo.
                    </CardContent>
                </Card>

                <Card className="h-72 bg-[#181818] border-0 rounded-2xl hover:bg-[#282828] transition-colors cursor-pointer group">
                    <CardHeader className="flex flex-col gap-4">
                        <div className="rounded-full bg-[#FF8DA1] p-3 w-fit group-hover:scale-110 transition-transform">
                            <DollarSign className="w-8 h-8 text-black" />
                        </div>
                        <CardTitle className="text-xl text-white">Preços afinados</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-neutral-400">
                        Ajuste valores, aplique descontos e mantenha sua precificação sempre em harmonia com o mercado.
                    </CardContent>
                </Card>

            </div>
        </section>
    )
}
