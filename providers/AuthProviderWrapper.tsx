"use client";

import { AuthProvider } from "./AuthProvider"; // adjust path if needed

export function AuthProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
