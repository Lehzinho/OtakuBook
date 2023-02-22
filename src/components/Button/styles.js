import styled from "styled-components";

export const Container = styled.button.attrs((props) => ({
  width: props.width || "100px",
  height: props.height || "35px",
  radius: props.radius || "50px",
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 auto;
  border-radius: ${(props) => props.radius};
  background-color: ${({ theme }) => theme.COLORS.GREENBK};
  cursor: pointer;
`;
