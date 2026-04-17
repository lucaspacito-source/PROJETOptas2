"use client";

import Header from "@/components/header";


export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col bg-brand-3">

      <Header />

      <div className="flex flex-1 items-center justify-center">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-gray-800">
            Home 
          </h1>

          <p className="text-gray-600 mt-2">
            Sistema rodando com sua paleta personalizada
          </p>

        </div>

      </div>
    </div>
  );
}