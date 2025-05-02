"use client";
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHeadCell,
  TableHead,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { useAuth } from "@/context/useAuth";

const DASHBOARD_TABLES = [
  {
    title: "Invoices",
  },
  {
    title: "Receipts",
  },
  {
    title: "Inventory",
  },
];

const DashboardPage = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth?.isLoggedIn()) {
      // router.push("/login");
      return;
    }
  });

  return (
    <div>
      {DASHBOARD_TABLES.map((tableData) => {
        return (
          <div key={tableData.title} className="p-4">
            <h1 className="mb-4 text-2xl font-bold text-gray-900">
              {tableData.title}
            </h1>
            <div className="overflow-x-auto">
              <Table className="">
                <TableHead>
                  {/* <TableRow> */}
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>Customer Name</TableHeadCell>
                  <TableHeadCell>Description</TableHeadCell>
                  <TableHeadCell>Type</TableHeadCell>
                  {/* </TableRow> */}
                </TableHead>
                <TableBody className="divide-y">
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Apple MacBook Pro 17
                    </TableCell>
                    <TableCell>Sliver</TableCell>
                    <TableCell>Laptop</TableCell>
                    <TableCell>$2999</TableCell>
                  </TableRow>
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </TableCell>
                    <TableCell>White</TableCell>
                    <TableCell>Laptop PC</TableCell>
                    <TableCell>$1999</TableCell>
                  </TableRow>
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Magic Mouse 2
                    </TableCell>
                    <TableCell>Black</TableCell>
                    <TableCell>Accessories</TableCell>
                    <TableCell>$99</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardPage;
