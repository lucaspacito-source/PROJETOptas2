"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

export default function RegisterForm({ className, ...props }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const body = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Erro ao registrar");
      alert("Conta criada com sucesso!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
              <FieldLabel htmlFor="username" className="text-white font-bold text-xs uppercase tracking-wide">
                Nome de usuário
              </FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                required
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
                className="h-12 rounded-lg bg-[#121212] border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-[#FF8DA1]/50 focus-visible:border-[#FF8DA1]"
              />
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
                className="h-12 rounded-lg bg-[#121212] border-white/10 text-white placeholder:text-neutral-500 focus-visible:ring-[#FF8DA1]/50 focus-visible:border-[#FF8DA1]"
              />
            </Field>

            {error && <p className="text-[#FF8DA1] text-sm font-medium">{error}</p>}

            <Field className="gap-4 mt-2">
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full h-12 bg-[#FF8DA1] text-black font-bold text-base hover:bg-[#FF6F8D] hover:scale-[1.02] transition-transform"
              >
                {loading ? "Registrando..." : "Criar conta"}
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
