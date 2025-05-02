import { DEFAULT_USER_TYPE } from "@/consts";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function verifyOtpHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, user_type, otp } = req.body;
  const apiUrl = process.env.BACKEND_API_URL;
  const apiKey = process.env.BACKEND_API_V1_KEY;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    const backendRes = await fetch(`https://${apiUrl}/api/v1/user/verify-otp`, {
      method: "POST",
      headers: {
        api_key: apiKey!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        user_type: user_type || DEFAULT_USER_TYPE,
        otp,
      }),
    });

    console.log("backendRes", backendRes);
    const contentType = backendRes.headers.get("content-type") || "";
    let responseBody: any = null;

    if (contentType.includes("application/json")) {
      responseBody = await backendRes.json();
    } else {
      responseBody = await backendRes.text();
    }

    res.status(backendRes.status).send(responseBody);
  } catch (error: any) {
    console.error("Proxy verify-otp error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
