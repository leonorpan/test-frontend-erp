import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/useAuth";
import { DEFAULT_USER_TYPE } from "@/consts";

export const useVerifyOtp = () => {
  const auth = useAuth();

  return useMutation({
    mutationFn: async (otp: string) => {
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
          user_type: DEFAULT_USER_TYPE, // or whatever your default USER_TYPE is
          otp,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to verify OTP");
      }

      const data = await res.json();
      return data;
    },
    onSuccess: (data) => {
      auth?.login(data);
    },
    onError: (error: any) => {
      console.error("OTP Verification Error:", error.message);
    },
  });
};
