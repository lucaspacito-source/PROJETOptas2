// frontend/src/middleware.js
import { NextResponse } from "next/server";

// Lista de rotas que precisam de login
const rotasPrivadas = ["/dashboard", "/links", "/music-admin"];

// Lista de rotas que NÃO devem ser acessadas se já estiver logado
const rotasDeAuth = ["/login", "/register"];

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const ehRotaPrivada = rotasPrivadas.some((r) => pathname.startsWith(r));
  const ehRotaDeAuth = rotasDeAuth.some((r) => pathname.startsWith(r));

  // Se a rota não é privada nem de auth, não precisa nem consultar o backend
  if (!ehRotaPrivada && !ehRotaDeAuth) {
    return NextResponse.next();
  }

  let estaLogado = false;

  try {
    const sessionResponse = await fetch(
      "http://localhost:5500/api/auth/get-session",
      {
        headers: {
          cookie: request.headers.get("cookie") ?? "",
        },
        cache: "no-store",
      },
    );

    if (sessionResponse.ok) {
      const session = await sessionResponse.json();
      estaLogado = !!session?.user;
    }
  } catch (err) {
    console.error("Erro ao verificar sessão no middleware:", err);
    // Backend fora do ar: trata como não logado (falha segura)
    estaLogado = false;
  }

  // Se não está logado e tenta acessar rota privada → manda pro login
  if (!estaLogado && ehRotaPrivada) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Se já está logado e tenta acessar login/register → manda pro dashboard
  if (estaLogado && ehRotaDeAuth) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Define em quais rotas o middleware roda
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/links/:path*",
    "/music-admin/:path*",
    "/login",
    "/register",
  ],
};