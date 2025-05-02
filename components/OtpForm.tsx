"use client";
import { Button } from "flowbite-react";
import { useRef, useState } from "react";

export function EmailVerificationOTPForm({
  onComplete,
  errorMessage,
}: {
  onComplete: (code: string) => void;
  errorMessage: string;
}) {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[] | null[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return; // Allow only alphanumeric single character
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (index === 5) {
      onComplete(newCodes.join(""));
      return;
    }

    if (value && index < 5) {
      inputRefs?.current?.[index + 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onComplete(codes.join(""));
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault(); // Prevent default paste behavior

    const pastedValue = e.clipboardData.getData("Text");
    const inputs = pastedValue.split("").slice(0, 6); // Only take up to 6 characters

    inputs.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = char;
        handleChange(index, char);
      }
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      const currentInput = inputRefs.current[index];
      if (currentInput?.value) {
        // If the input has a value, clear it first
        currentInput.value = "";
        handleChange(index, ""); // Clear the corresponding state too
      } else if (index > 0) {
        // If input is already empty, move to previous input
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <section className="bg-white px-4 py-8 dark:bg-gray-900 lg:py-0">
      <div className="lg:flex">
        <div className="bg-primary-600 hidden w-full max-w-md p-12 lg:block lg:h-screen">
          <div className="mb-8 flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center text-2xl font-semibold text-white"
            >
              <img alt="" src="./gh_small_logo.svg" className="mr-2 size-11" />
            </a>
            <a
              href="/login"
              className="text-primary-100 inline-flex items-center text-sm font-medium hover:text-white"
            >
              <svg
                className="mr-1 size-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Go back
            </a>
          </div>
        </div>
        <div className="mx-auto flex items-center md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <div className="mb-8 flex items-center justify-center space-x-4 lg:hidden">
              <a href="#" className="flex items-center text-2xl font-semibold">
                <img
                  alt=""
                  className="mr-2 size-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                />
                <span className="text-gray-900 dark:text-white">Flowbite</span>
              </a>
            </div>
            <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Verify your email address
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              We emailed you a six-digit code to&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                name@company.com
              </span>
              . Enter the code below to confirm your email address.
            </p>

            <form action="#">
              <div className="my-4 flex space-x-2 sm:space-x-4 md:my-6">
                {[
                  "First code",
                  "Second code",
                  "Third code",
                  "Fourth code",
                  "Fifth code",
                  "Sixth code",
                ].map((label, i) => (
                  <div key={i}>
                    <label htmlFor={`code-${i + 1}`} className="sr-only">
                      {label}
                    </label>
                    <input
                      id={`code-${i + 1}`}
                      maxLength={1}
                      ref={(el) => (inputRefs.current[i] = el)}
                      onPaste={handlePaste}
                      onChange={(e) => handleChange(i, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      required
                      autoFocus={i === 0}
                      type="text"
                      className="block size-12 rounded-lg border border-gray-300 bg-white py-3 text-center text-2xl font-extrabold text-gray-900 focus:border-ghred-500 focus:ring-ghred-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-ghred-500 dark:focus:ring-ghred-500 sm:size-16 sm:py-4 sm:text-4xl"
                    />
                  </div>
                ))}
              </div>
              <p className="mb-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400 md:mb-6">
                Make sure to keep this window open while checking your inbox.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="submit"
                  size="xl"
                  onClick={handleSubmit}
                  className="w-full bg-ghred-500 hover:bg-ghred-600 [&>span]:text-sm"
                >
                  Verify account
                </Button>
              </div>
              {errorMessage && (
                <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
