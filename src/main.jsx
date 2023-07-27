import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Route/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
