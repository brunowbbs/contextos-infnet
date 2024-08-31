import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { router } from "../../routes";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const navigate = useNavigate();

  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   if (username === "") {
  //     router.navigate("/login");
  //   }
  // }, []);

  function salvarUsuarioLogado(usernameParam) {
    setUsername(usernameParam);
    localStorage.setItem("@usuario-logado", usernameParam);
  }

  function recuperarUsuarioLogado() {
    const usuario = localStorage.getItem("@usuario-logado");

    if (usuario) {
      setUsername(usuario);
    } else {
      router.navigate("/login");
    }
  }

  function deslogarUsuario() {
    localStorage.removeItem("@usuario-logado");
    recuperarUsuarioLogado();
  }

  useLayoutEffect(() => {
    recuperarUsuarioLogado();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username: username,
        setUsername: setUsername,
        salvarUsuarioLogado: salvarUsuarioLogado,
        deslogarUsuario: deslogarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
