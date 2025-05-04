import { Badge } from "flowbite-react";
import React from "react";

interface AppBadgeProps {
  color?: "green" | "red";
  children?: React.ReactNode;
}

export default function AppBadge({ color = "green", children }: AppBadgeProps) {
  const badgeBgColor = {
    green: "bg-green-100",
    red: "bg-red-100",
  };

  const badgeTextColor = {
    green: "text-green-900",
    red: "text-red-900",
  };

  return (
    <Badge
      size="sm"
      className={`px-2 py-1 text-xs font-medium ${badgeTextColor[color]} ${badgeBgColor[color]}`}
    >
      {children}
    </Badge>
  );
}
