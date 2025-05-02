export const LOGIN_ERROR_MESSAGES: Record<number, string> = {
  400: "Missing email or password. Please check and try again.",
  401: "Incorrect email or password. Please try again.",
  403: "Your account is inactive. Please contact support.",
  404: "No account found with that email. Please sign up.",
  422: "Invalid input. Please check your details and try again.",
  423: "Please verify your email address before logging in.",
  500: "Something went wrong. Please try again later.",
};

export const OTP_ERROR_MESSAGES: Record<number, string> = {
  400: "We couldn't generate the OTP. Please try again.",
  401: "You need to log in first. Please authenticate.",
  402: "Your account has been deactivated. Please contact support.",
  403: "Please set up your password or check with your organization.",
  404: "No account found with that email. Please sign up.",
  422: "The OTP you entered is invalid. Please check and try again.",
  423: "Please verify your email address before continuing.",
  500: "Something went wrong. Please try again later.",
};
