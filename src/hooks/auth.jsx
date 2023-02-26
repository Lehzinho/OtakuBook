import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import AvatarPaceholder from "../assets/Profile_avatar_placeholder_large.png";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [avatar, setAvatar] = useState(null);

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

  async function updateProfile({ user, avatarFile, backgroundFile }) {
    try {
      const fileUploadForm = new FormData();

      if (avatarFile) {
        console.log("avatar");
        fileUploadForm.append("avatar", avatarFile);
      }

      if (backgroundFile) {
        console.log("background");
        fileUploadForm.append("background", backgroundFile);
      }

      const response = await api.patch("/users/avatar", fileUploadForm);

      user.background = response.data.background;
      user.avatar = response.data.avatar;

      localStorage.setItem("@otakubooks:user", JSON.stringify(user));

      await api.put("/users", user);

      setData({ user, token: data.token });
      alert("Perfil atualizado");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possíve atualizar o perfil");
      }
    }
  }

  function signOut() {
    // Clear local storage
    localStorage.removeItem("@otakubooks:token");
    localStorage.removeItem("@otakubooks:user");

    setData({});
  }

  useEffect(() => {
    //Provide a avatar to the pages
    if (data.user) {
      setAvatar(
        data.user.avatar
          ? `${api.defaults.baseURL}/avatar/${data.user.avatar}`
          : AvatarPaceholder
      );
    }
  }, [data]);

  useEffect(() => {
    //Manage Local storage
    const token = localStorage.getItem("@otakubooks:token");
    const user = localStorage.getItem("@otakubooks:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        updateProfile,
        signOut,
        avatar,
        setAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const contex = useContext(AuthContext);

  return contex;
}

export { AuthProvider, useAuth };
