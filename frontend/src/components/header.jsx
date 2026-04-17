"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-brand-3">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <button
          onClick={() => router.push("/home")}
          className="font-semibold text-gray-700 hover:text-brand-1"
        >
          Home
        </button>

        <div className="flex gap-4">
          <button
            onClick={() => router.push("/login")}
            className="text-gray-600 hover:text-brand-1"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/register")}
            className="text-gray-600 hover:text-brand-1"
          >
            Registrar
          </button>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Home 
          </h1>
          <p className="text-gray-600 mt-2">
          Sistema Ativo 
          </p>
        </div>
      </div>
    </div>
  );
}
