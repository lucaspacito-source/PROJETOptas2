import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ClipboardIcon, Clock, DollarSign } from "lucide-react";

export default function FeatureCards() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6">

            <Card className="h-70 hover:shadow-2xl transition-shadow">
                <CardHeader className="flex flex-col gap-2 ">
                    <div className="rounded-full bg-purple-100 p-2">
                        <ClipboardIcon className="w-10 h-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Cadastro Completo</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                    Registre todos os detalhes dos seus serviços em um só lugar, incluindo descrições, valores e especificações.
                </CardContent>
            </Card>

            <Card className="h-70 hover:shadow-2xl transition-shadow">
                <CardHeader className="flex flex-col gap-2 ">
                    <div className="rounded-full bg-purple-100 p-2">
                        <Clock className="w-10 h-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Tempo Estimado</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                    Defina e acompanhe o tempo estimado de execução de cada serviço para melhor planejamento.
                </CardContent>
            </Card>

            <Card className="h-70 hover:shadow-2xl transition-shadow">
                <CardHeader className="flex flex-col gap-2 ">
                    <div className="rounded-full bg-purple-100 p-2">
                        <DollarSign className="w-10 h-10 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Valores e Descontos</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                    Gerencie preços, aplique descontos e mantenha a precificação sempre atualizada e organizada.
                </CardContent>
            </Card>

        </section>
    )
}
