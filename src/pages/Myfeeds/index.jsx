import { Nav } from "../../components/Nav";
import { Container, MyInfo, MyFeed, Info } from "./styles";
import { Header } from "../../components/Header";
import Avatar from "../../assets/Avatar.png";
export function MyFeeds() {
  return (
    <Container>
      <Nav />
      <MyInfo>
        <Header />
        <Info>hello</Info>
      </MyInfo>
      <MyFeed></MyFeed>
    </Container>
  );
}
