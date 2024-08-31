import { useState } from "react";
import { createContext } from "react";

export const ProdutosFavoritosContext = createContext();

export const ProdutosFavoritosProvider = ({ children }) => {
  const [produtosFavoritos, setProdutosFavoritos] = useState([]);

  return (
    <ProdutosFavoritosContext.Provider
      value={{ produtosFavoritos, setProdutosFavoritos }}
    >
      {children}
    </ProdutosFavoritosContext.Provider>
  );
};
