# GH Frontend Test

## App Overview

_Tech:_

- **Framework:** Next.js

- **UI:** Flowbite-React, TailwindCSS

- **Charts:** ECharts-React

- **Data Fetching:** TanStack Query (for robust error handling, retries, loading, success, and error states)

- **Client State Management:** React Context

## Setup

```bash
npm run setup
```

In your .env.local file, paste the url and the token of the backend.

```bash
npm run install-and-dev
```

## Part 1 - Authentication

### Authentication Architecture

When developing the authentication flow, my priority was to **prevent exposure of sensitive data** — both publicly (e.g., GitHub commits) and during client runtime (e.g., API keys, user tokens).

To achieve this, I implemented **proxy API routes** located under the `/pages/api/**/*.ts` directory.
This ensures that all API interactions are routed through a secure server-side layer, keeping sensitive credentials hidden from the client.

For session persistence, I used two cookies: `accessToken` and `refreshToken`.
These cookies allow users to stay authenticated while navigating the app. If the tokens are missing or invalid, they are cleared automatically, and the user is redirected back to the login page.

Key design choices:

- Sensitive keys and tokens never exposed on the client.
- Smooth, secure session management.
- React Context used for handling authentication state between forms and components.

## Part 2 — Dashboard

### Dashboard Architecture

The dashboard is structured with **modular, reusable components** using Flowbite-React and TailwindCSS, with **no custom CSS** to maintain consistency and scalability.

For the **Summary Section**:

- Implemented a clean responsive layout displaying key financial metrics (e.g., Outstanding Invoices, Gross Profit Margin, Revenue, Expenses, Profit Breakdown).
- Data fetching is fully integrated using **TanStack Query**, handling loading, error, and success states.
- Data visualization is powered by **ECharts-React** for revenue, expenses, and stock value trends.

**Currently in Progress:**

- Implementing **empty states** for when data is unavailable (e.g., API errors or no financial data).
- Designing consistent fallback UI to preserve layout and UX in all cases.

### Notes:

- All data interactions go through **client-safe API routes**, following the same security principles as in the authentication flow.

## Final Notes

While the project is still a work in progress, the core structure is fully in place:

- Authentication is complete and security best practices are implemented.
- The dashboard's Summary Section is functional, styled, and data-driven.
- Empty state handling is actively being developed to ensure a robust user experience.

Since additional API endpoints would be required to fully populate the remaining dashboard sections, I made the decision to prioritize building the empty states first. This approach maintains layout integrity and provides a complete user experience, while leaving flexibility to fetch and display dynamic data if time allows.
