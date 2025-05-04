"use client";
import React, { useState } from "react";

import { AuthContext } from "@/context";
import { AuthUser, GuestUser, UserData } from "@/types";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [guestUser, setGuestUser] = useState<GuestUser | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  const loginFirstFactor = (email: string) => {
    // TODO: Implement the first factor login logic
  };

  const loginSecondFactor = (userData: AuthUser) => {
    setUser(userData.user);
    setGuestUser(null);
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        guestUser,
        setGuestUser,
        loginSecondFactor,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
