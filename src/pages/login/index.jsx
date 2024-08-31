import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "./service";
import { AuthContext } from "../../contexts/auth-context";

export function Login() {
  const navigate = useNavigate();
  const { salvarUsuarioLogado } = useContext(AuthContext);

  const [formData, setFormData] = useState({ email: "", senha: "" });

  async function logar() {
    try {
      const response = await loginRequest(formData.email, formData.senha);
      salvarUsuarioLogado(response.username);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer login");
    }
  }

  return (
    <div>
      <h1>Hello Login</h1>

      <form>
        <input
          placeholder="E=mail"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <br />
        <br />
        <input
          placeholder="Senha"
          value={formData.senha}
          onChange={(event) =>
            setFormData({ ...formData, senha: event.target.value })
          }
        />
        <br />
        <br />
        <button type="button" onClick={logar}>
          Entrar
        </button>
      </form>
    </div>
  );
}
