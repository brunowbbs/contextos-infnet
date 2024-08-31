import { createRoot } from "react-dom/client";
import { Routes } from "./routes";

import { AuthContextProvider } from "./contexts/auth-context";
import { ProdutosFavoritosProvider } from "./contexts/produtos-favoritos-context";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProdutosFavoritosProvider>
      <Routes />
    </ProdutosFavoritosProvider>
  </AuthContextProvider>
);
