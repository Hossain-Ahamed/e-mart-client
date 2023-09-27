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
import CartDataProvider from "./Contexts/CartDataProvider";
import { Toaster } from "react-hot-toast";
import UserDataProvider from "./Contexts/UserDataProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <UserDataProvider>
            <CartDataProvider>
              <Toaster position="bottom-right" reverseOrder={false} />
              <RouterProvider router={router} />
            </CartDataProvider>
          </UserDataProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
