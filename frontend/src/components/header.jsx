"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">

      <button
        onClick={() => router.push("/home")}
        className="font-semibold text-gray-700 hover:text-brand-1"
      >
         Home
      </button>

      <div className="flex gap-4">

        {!token ? (
          <button
            onClick={() => router.push("/login")}
            className="text-gray-600 hover:text-brand-1"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/login");
            }}
            className="text-red-500 hover:text-red-600"
          >
            Sair
          </button>
        )}

      </div>
    </header>
  );
}