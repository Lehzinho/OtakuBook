import styled from "styled-components";
import Background from "../../assets/dswallpapper.jpg";

export const Container = styled.header.attrs((props) => ({
  bkHeight: props.bkHeight || "150px",
  imgSize: props.imgSize || "200px",
}))`
  width: 100%;
  height: ${(props) => props.bkHeight};
  border-radius: 15px;
  background-image: url(${Background});
  background-position: top;
  background-size: cover;
  position: relative;
  > img {
    width: ${(props) => props.imgSize};
    aspect-ratio: 1;
    position: absolute;
    left: calc(50% - (${(props) => props.imgSize} / 2));
    top: calc(100% - (${(props) => props.imgSize} / 2));
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px #fff2d7;
  }
`;
