"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { LOGIN_ERROR_MESSAGES } from "@/consts";
import { DEFAULT_USER_TYPE } from "@/consts";
import { useAuth } from "@/context";
import { LoginFormData } from "@/types";

import { LoginForm } from "@/components/LoginForm";

import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutateAsync: loginMutateAsync } = useLogin();

  async function handleLoginFormSubmit(formData: LoginFormData) {
    // Set guest user email in auth context
    // this is used on the EmailVerification page to submit the verify-otp request
    auth.setGuestUser({ email: formData.email });
    try {
      const response = await loginMutateAsync({
        ...formData,
        user_type: DEFAULT_USER_TYPE,
      });
      auth?.login(response);
      router.push("/otp");
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        const statusCode = (error as { status?: number })?.status || 500;
        const message = LOGIN_ERROR_MESSAGES[statusCode];
        setErrorMessage(message);
      } else {
        setErrorMessage("An unknown error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <LoginForm onSubmit={handleLoginFormSubmit} errorMessage={errorMessage} />
    </div>
  );
}
