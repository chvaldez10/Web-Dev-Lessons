"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexReactClient, ConvexProvider } from "convex/react";

export function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </NextThemesProvider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
}
