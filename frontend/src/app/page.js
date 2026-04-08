// app/login/page.tsx (App Router)
// ou pages/login.tsx (Pages Router)

import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      
        <div className="flex justify-center mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
            <span className="text-white text-2xl">♪</span>
          </div>
        </div>

       
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Bem-vindo de volta
        </h2>
        <p className="mt-1 text-center text-gray-500">
          Faça login para continuar ouvindo
        </p>

        
        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 px-4 py-2 text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Entrar
          </button>
        </form>

      
        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <a
            href="/register"
            className="font-medium text-purple-600 hover:text-purple-700"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
