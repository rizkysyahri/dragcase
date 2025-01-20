import { NextRequest, NextResponse } from "next/server";

// Replace with the actual domains that should be allowed to access your API
const allowedOrigins = [
  "https://dragcase.vercel.app", // Frontend domain
  "https://your-auth-domain.com" // Example: your authentication domain, if separate
];

// CORS options to set in the response headers
const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true"
};

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  
  // If the origin is in the allowedOrigins list, add CORS headers
  if (origin && allowedOrigins.includes(origin)) {
    if (request.method === "OPTIONS") {
      // Handle preflight OPTIONS request
      const preflightHeaders = {
        "Access-Control-Allow-Origin": origin,
        ...corsOptions
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }
    
    // For non-OPTIONS requests, add CORS headers to the response
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", origin);
    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }
  
  // If the origin is not allowed, proceed without adding CORS headers
  return NextResponse.next();
}

// Apply middleware to all paths
export const config = {
  matcher: "/api/:path*" // Apply middleware to API routes
};
