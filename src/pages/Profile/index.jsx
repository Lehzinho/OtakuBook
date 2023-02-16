import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Container, Content, MyInfo } from "./styles";

export function Profile() {
  return (
    <Container>
      <Nav />
      <Content>
        <Header />
        <MyInfo>
          <h1>Minha Informação</h1>
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Current Password" />
            <input placeholder="New Password" />
            <Button title="Update" />
          </form>
        </MyInfo>
      </Content>
    </Container>
  );
}
