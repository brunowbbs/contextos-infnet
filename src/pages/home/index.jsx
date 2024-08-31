import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth-context";
import axios from "axios";
import { ProdutosFavoritosContext } from "../../contexts/produtos-favoritos-context";

export function Home() {
  const navigate = useNavigate();
  const { username, deslogarUsuario } = useContext(AuthContext);
  const { produtosFavoritos, setProdutosFavoritos } = useContext(
    ProdutosFavoritosContext
  );

  const [isLoading, setIsLoading] = useState(false);
  const [produtos, setProdutos] = useState();

  async function buscarProdutos() {
    setIsLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProdutos(response.data.products);
    } catch (error) {
      alert("Erro ao buscar produtos");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  if (isLoading) {
    return <p>carregando....</p>;
  }

  return (
    <div>
      <button onClick={deslogarUsuario}>Sair</button>
      <button onClick={() => navigate("/favoritos")}>Ver favoritos</button>
      {produtos?.map((produto) => (
        <div>
          <h3>{produto.title}</h3>
          <img src={produto.thumbnail} />
          <p>{produto.price}</p>
          <button
            onClick={() => {
              setProdutosFavoritos([...produtosFavoritos, produto]);
              alert("Produto adicionado a lista de favoritos");
            }}
          >
            Adicionar aos favoritos
          </button>
        </div>
      ))}
    </div>
  );
}
