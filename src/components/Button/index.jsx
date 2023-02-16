import { Container } from "./styles";

export function Button({ width, radius, title, height }) {
  return (
    <Container radius={radius} width={width} height={height}>
      {title}
    </Container>
  );
}
