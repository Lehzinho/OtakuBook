import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@otakubooks:user", JSON.stringify(user));
      localStorage.setItem("@otakubooks:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possíve entrar");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@otakubooks:token");
    const user = localStorage.getItem("@otakubooks:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const contex = useContext(AuthContext);

  return contex;
}

export { AuthProvider, useAuth };
