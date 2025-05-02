"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { OTP_ERROR_MESSAGES } from "@/consts";

import { EmailVerificationOTPForm } from "@/components/OtpForm";

import { useVerifyOtp } from "@/hooks/useVerifyOtp";

export default function EmailVerificationPage() {
  const { mutate: verifyOtp, error } = useVerifyOtp();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleOtpFormSubmit = async (otp: string) => {
    setIsSubmitting(true);
    setErrorMessage(""); // Clear previous error message
    try {
      await verifyOtp(otp);
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        const statusCode = (error as { status?: number })?.status || 500;
        const message = OTP_ERROR_MESSAGES[statusCode];
        setErrorMessage(message);
      } else {
        setErrorMessage(
          "An unknown error occurred during OTP verification. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EmailVerificationOTPForm
      onComplete={handleOtpFormSubmit}
      errorMessage={errorMessage}
      isSubmitting={isSubmitting}
    />
  );
}
