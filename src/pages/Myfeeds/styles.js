import styled from "styled-components";
import Background from "../../assets/dswallpapper.jpg";
const backgroundL = ({ theme }) => theme.COLORS.BROUWNBK_100;
const backgroundD = ({ theme }) => theme.COLORS.BROUWNBK_300;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  grid-template-rows: 150px 1fr;

  grid-template-areas:
    "menu"
    "content";
`;

export const MyInfo = styled.header`
  width: 800px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  height: 145px;
  border-radius: 15px;
  background-image: url(${Background});
  background-position: top;
  background-size: cover;
  > img {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50px;
    left: calc(50% - 100px);
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px #fff2d7;
  }
`;

export const Info = styled.div`
  width: 800px;
  height: 216px;
  background-color: ${backgroundL};
  border-radius: 15px;
  border: 1px solid #d3d0c9;
`;

export const MyFeed = styled.main`
  width: 800px;
  background-color: ${backgroundL};
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  border: 1px solid #d3d0c9;
  border-radius: 15px;
`;
