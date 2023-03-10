import styled from "styled-components";
import Background from "../../assets/dswallpapper.jpg";

export const Container = styled.header.attrs((props) => ({
  bkHeight: props.bkHeight || "150px",
  imgSize: props.imgSize || "200px",
}))`
  width: 100%;
  height: ${(props) => props.bkHeight};
  border-radius: 15px;
  background-position: top;
  background-size: cover;
  position: relative;
  label:first-child {
    width: 50;
    height: 50;
    position: absolute;
    right: 60px;
    top: 10px;
    cursor: pointer;
    > input {
      display: none;
    }
    > svg {
      background-color: ${({ theme }) => theme.COLORS.BROUWNBK_300};
      border-radius: 15px;
      width: 50px;
      height: 45px;
      padding: 0 10px;
      color: ${({ theme }) => theme.COLORS.BROUWNBK_100};
      border: 2px solid black;
      position: absolute;
    }
  }

  > div {
    position: absolute;
    left: calc(50% - (${(props) => props.imgSize} / 2));
    top: calc(100% - (${(props) => props.imgSize} / 2));
    img {
      width: ${(props) => props.imgSize};
      aspect-ratio: 1;
      border-radius: 50%;
      box-shadow: 0px 0px 0px 2px #fff2d7;
    }
    svg {
      background-color: ${({ theme }) => theme.COLORS.BROUWNBK_300};
      border-radius: 15px;
      width: 50px;
      height: 45px;
      padding: 0 10px;
      color: ${({ theme }) => theme.COLORS.BROUWNBK_100};
      border: 2px solid black;
      position: absolute;
      right: calc(50% - (${(props) => props.imgSize} / 2));
      bottom: calc(100% - (${(props) => props.imgSize} - 15px));
    }
    > label {
      width: 50;
      height: 50;
      cursor: pointer;
      input {
        display: none;
      }
    }
  }
`;
