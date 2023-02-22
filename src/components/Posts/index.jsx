import { Container, Content, Interaction, User } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Post({ userId, likes, comment, subComment, file }) {
  const [user, setUser] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const avatar = user && `${api.defaults.baseURL}/avatar/${user.avatar}`;

  useEffect(() => {
    async function getUser() {
      const user = await api.get(`/users/?id=${1}`);
      setUser(user.data);
    }
    getUser();
  }, []);

  // user && console.log(userAvatar);
  return (
    <Container>
      <User>
        <img src={user && avatar} alt="   " />
        <p>{user && user.name}</p>
      </User>
      <Content>
        <img src={""} alt="" />
        <p>{comment}</p>
      </Content>
      <Interaction></Interaction>
    </Container>
  );
}
