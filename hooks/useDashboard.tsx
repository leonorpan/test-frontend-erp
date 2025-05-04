import { useQuery } from "@tanstack/react-query";

import { DashboardAccountantResponse } from "@/types";

async function fetchDashboardAccountant(): Promise<DashboardAccountantResponse> {
  const response = await fetch("/api/dashboard", {
    method: "GET",
    credentials: "include", // Important for cookies
  });

  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(errorBody.message || "Failed to fetch dashboard data");
  }

  return response.json();
}

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard", "accountant"],
    queryFn: fetchDashboardAccountant,
    // @ts-ignore-next-line
    onSuccess: (data: DashboardAccountantResponse) => {
      console.log("Fetched dashboard accountant data:", data);
    },
    onError: (error: any) => {
      console.error("Error fetching dashboard data:", error);
    },
    retry: (failureCount, error: any) => {
      if (error?.status === 401) {
        return false;
      }
      return failureCount < 2;
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
}
