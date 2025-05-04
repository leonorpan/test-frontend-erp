import { useMutation } from "@tanstack/react-query";

import { DEFAULT_USER_TYPE } from "@/consts";
import { useAuth } from "@/context/useAuth";

export const useVerifyOtp = () => {
  const auth = useAuth();

  const verifyOtp = async (otp: string) => {
    if (!auth?.guestUser?.email) {
      throw new Error("No guest email available");
    }

    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: auth.guestUser.email,
        user_type: DEFAULT_USER_TYPE,
        otp,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to verify OTP");
    }

    const data = await res.json();
    return data;
  };

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      auth?.loginSecondFactor(data);
    },
    onError: (error: any) => {
      console.error("OTP Verification Error:", error.message);
    },
  });
};
