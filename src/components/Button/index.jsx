import { Container } from "./styles";

export function Button({ width, radius, title, height, ...rest }) {
  return (
    <Container radius={radius} width={width} height={height} {...rest}>
      {title}
    </Container>
  );
}
