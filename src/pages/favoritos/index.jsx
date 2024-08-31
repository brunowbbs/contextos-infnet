import { useContext } from "react";
import { ProdutosFavoritosContext } from "../../contexts/produtos-favoritos-context";

export function Favoritos() {
  const { produtosFavoritos, setProdutosFavoritos } = useContext(
    ProdutosFavoritosContext
  );

  return (
    <div>
      <h1>Hello Favoritos</h1>

      {produtosFavoritos.map((produto) => (
        <div>
          <h3>{produto.title}</h3>
          <img src={produto.thumbnail} />
          <p>{produto.price}</p>
        </div>
      ))}
    </div>
  );
}
