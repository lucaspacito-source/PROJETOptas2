"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "src/components/header";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      alert("Erro no login");
      return;
    }

    const data = await res.json();

    localStorage.setItem("token", data.token);
    router.push("/home");
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-4">

      <Header />

      <div className="flex flex-1 items-center justify-center">

        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Login
          </h1>

          <p className="text-center text-gray-500 mb-6">
            Entre na sua conta
          </p>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              className="w-full p-3 rounded border bg-brand-4"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full p-3 rounded border bg-brand-4"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="w-full p-3 rounded bg-brand-1 hover:bg-brand-2 text-white"
            >
              Entrar
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}