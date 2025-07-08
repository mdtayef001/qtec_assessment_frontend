import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import S_Routes from "./Routers/S_Routes";
import CartProvider from "./Provider/CartProvider";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <S_Routes />
        </BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
