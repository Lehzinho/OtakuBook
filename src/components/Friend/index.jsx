import { Container } from "./styles";
import Avatar from "../../assets/Avatar.png";

export function Friend() {
  return (
    <Container>
      <img src={Avatar} alt="" />
      <h3>Nome Usuario</h3>
      <span></span>
    </Container>
  );
}
