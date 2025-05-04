import { parseCookies } from "nookies";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function dashboardAccountantHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const cookies = parseCookies({ req });
  const refreshToken = cookies.refreshToken;
  const accessToken = cookies.accessToken;
  const apiUrl = process.env.BACKEND_API_URL;
  const apiKey = process.env.BACKEND_API_V1_KEY;

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized: No refresh token" });
  }

  try {
    const backendRes = await fetch(
      `https://${apiUrl}/api/v1/dashboard/accountant`,
      {
        headers: {
          api_key: apiKey!,
          "Content-Type": "application/json",
          token: accessToken,
        },
      },
    );

    const responseBody = await backendRes.json().catch(() => ({})); // backend might not send body
    if (!backendRes.ok) {
      return res
        .status(backendRes.status)
        .json(responseBody || { message: "Getting dashboard data failed" });
    }

    return res.status(200).json(responseBody);
  } catch (error: any) {
    // Usually reporting the error to a monitoring service
    console.error("Proxy dashboard error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
