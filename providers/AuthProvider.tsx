"use client";
import React, { useState } from "react";
import { AuthUser, GuestUser, UserData } from "@/types";
import { AuthContext } from "@/context";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState("");
  const [guestUser, setGuestUser] = useState<GuestUser | null>(null);
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useState<UserData | null>(null);

  const login = (userData: AuthUser) => {
    setAccessToken(userData.accessToken);
    setRefreshToken(userData.refreshToken);
    setUser(userData.user);
  };

  const logout = () => {
    setAccessToken("");
    setUser(null);
  };

  const isLoggedIn = () => {
    return !!accessToken && !!user;
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        guestUser,
        setGuestUser,
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
