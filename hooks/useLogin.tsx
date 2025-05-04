import { useMutation } from "@tanstack/react-query";

import { LoginFormRequestBody } from "@/types";

async function loginRequest({
  email,
  password,
  user_type,
}: LoginFormRequestBody) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, user_type }),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({})); // sometimes backend sends no body
    const error = new Error(errorBody.message || "Login failed") as any;
    error.status = res.status;
    error.body = errorBody;
    throw error;
  }

  console.log("Login response", res);

  return res.json();
}

export function useLogin() {
  return useMutation({
    mutationFn: loginRequest,
    retry: (_failureCount, error: any) => {
      if (error?.status >= 500) {
        return true; // retry
      }
      return false;
    },
    onError: (error: any) => {
      console.error("Login error:", error.message);
    },
  });
}
