import { DEFAULT_USER_TYPE } from "@/consts";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password, user_type } = req.body;
  const apiUrl = process.env.BACKEND_API_URL;
  const apiKey = process.env.BACKEND_API_V1_KEY;

  try {
    const backendRes = await fetch(`https://${apiUrl}/api/v1/user/login`, {
      method: "POST",
      headers: {
        api_key: apiKey!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        user_type: user_type || DEFAULT_USER_TYPE,
      }),
    });

    const responseBody = await backendRes.json().catch(() => ({})); // backend might not send body

    if (!backendRes.ok) {
      return res
        .status(backendRes.status)
        .json(responseBody || { message: "Login failed" });
    }

    return res.status(200).json(responseBody);
  } catch (error: any) {
    // Usually reporting the error to a monitoring service
    console.error("Proxy login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
