import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { useAuth } from "../../hooks/auth";
import { Container, Content, MyInfo } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [backgroundFile, setBackgroundFile] = useState(null);

  async function handleUpdate(e) {
    e.preventDefault();
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const constUpdated = Object.assign(user, updated);
    await updateProfile({
      user: constUpdated,
      avatarFile: avatarFile,
      backgroundFile: backgroundFile,
    });
  }

  return (
    <Container>
      <Nav />
      <Content>
        <Header
          edit={true}
          setAvatarFile={setAvatarFile}
          setBackgroundFile={setBackgroundFile}
        />
        <MyInfo>
          <h1>Minha Informação</h1>
          <form>
            <input
              placeholder={user.name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Current Password"
              onChange={(e) => setPasswordOld(e.target.value)}
            />
            <input
              placeholder="New Password"
              onChange={(e) => setPasswordNew(e.target.value)}
            />
            <Button title="Update" onClick={handleUpdate} />
          </form>
        </MyInfo>
      </Content>
    </Container>
  );
}
