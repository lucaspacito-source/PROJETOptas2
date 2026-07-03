"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";

export default function RegisterForm({ className, ...props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Erro ao criar conta. Verifique os dados e tente novamente.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-sm", className)} {...props}>
      <div className="bg-[#181818] rounded-2xl px-8 py-10">
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field className="gap-3">
              <Button
                variant="outline"
                type="button"
                className="rounded-full h-11 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold"
              >
                Continuar com Apple
              </Button>
              <Button
                variant="outline"
                type="button"
                className="rounded-full h-11 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold"
              >
                Continuar com Google
              </Button>
            </Field>

            <FieldSeparator className="text-neutral-500 *:data-[slot=field-separator-content]:bg-[#181818]">
              ou
            </FieldSeparator>

            <Field>
              <FieldLabel htmlFor="name" className="text-white font-bold text-xs uppercase tracking-wide">
                Nome completo
              </FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-lg bg-[#121212] border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-[#FF8DA1]/50 focus-visible:border-[#FF8DA1]"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email" className="text-white font-bold text-xs uppercase tracking-wide">
                Email
              </FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-lg bg-[#121212] border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-[#FF8DA1]/50 focus-visible:border-[#FF8DA1]"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password" className="text-white font-bold text-xs uppercase tracking-wide">
                Senha
              </FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-lg bg-[#121212] border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-[#FF8DA1]/50 focus-visible:border-[#FF8DA1]"
              />
              <FieldDescription className="text-xs text-neutral-500">
                Deve ter pelo menos 8 caracteres.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="confirmPassword" className="text-white font-bold text-xs uppercase tracking-wide">
                Confirmar senha
              </FieldLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 rounded-lg bg-[#121212] border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-[#FF8DA1]/50 focus-visible:border-[#FF8DA1]"
              />
            </Field>

            <div className="flex items-start gap-2 text-sm text-neutral-400">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 rounded border-white/20 bg-[#121212] text-[#FF8DA1] focus:ring-[#FF8DA1]/50"
              />
              <label htmlFor="terms">
                Eu concordo com os{" "}
                <a href="#" className="text-white font-bold hover:underline">
                  termos de uso
                </a>{" "}
                e{" "}
                <a href="#" className="text-white font-bold hover:underline">
                  política de privacidade
                </a>
              </label>
            </div>

            {error && <p className="text-[#FF8DA1] text-sm font-medium">{error}</p>}

            <Field className="gap-4 mt-2">
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full h-12 bg-[#FF8DA1] text-black font-bold text-base hover:bg-[#FF6F8D] hover:scale-[1.02] transition-transform"
              >
                {loading ? "Criando conta..." : "Criar conta"}
              </Button>
              <FieldDescription className="text-center text-neutral-400">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-white font-bold hover:underline">
                  Faça login
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </div>
      <FieldDescription className="px-6 text-center text-neutral-500">
        Ao continuar, você concorda com nossos <a href="#" className="underline hover:text-neutral-300">Termos de Serviço</a>{" "}
        e <a href="#" className="underline hover:text-neutral-300">Política de Privacidade</a>.
      </FieldDescription>
    </div>
  );
}