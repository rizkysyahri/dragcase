import { NextRequest, NextResponse } from "next/server";

// Daftar domain yang diizinkan
const allowedOrigins = [
  "https://dragcase.vercel.app", // Frontend domain
  "https://dragcase.kinde.com",  // Domain autentikasi
];

// Opsi CORS yang akan disetel di header respons
const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  // Jika origin ada dan ada di daftar yang diizinkan
  if (origin && allowedOrigins.includes(origin)) {
    if (request.method === "OPTIONS") {
      // Menangani preflight OPTIONS request
      const preflightHeaders = {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Max-Age": "86400", // Cache preflight request selama 24 jam
        ...corsOptions
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }

    // Menambahkan header CORS untuk request selain OPTIONS
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", origin);
    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

  // Jika origin tidak diizinkan, lanjutkan tanpa header CORS
  console.error(`Blocked CORS request from origin: ${origin}`);
  return NextResponse.next();
}

// Terapkan middleware pada semua rute API
export const config = {
  matcher: "/api/:path*", // Terapkan middleware pada rute API
};
