import { Container } from "./styles";
import Avatar from "../../assets/Avatar.png";

export function Header({ imgSize, bkHeight }) {
  return (
    <Container imgSize={imgSize} bkHeight={bkHeight}>
      <img src={Avatar} alt="Avatar" />
    </Container>
  );
}
