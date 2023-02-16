import styled from "styled-components";
import Header from "../../assets/dswallpapper.jpg";
const backgroundL = ({ theme }) => theme.COLORS.BROUWNBK_100;
const backgroundD = ({ theme }) => theme.COLORS.BROUWNBK_300;

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "menu"
    "content";
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
  }
  .watchAndFrinds {
    display: grid;
    grid-template-rows: 150px 1fr;
  }
`;

export const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundL};
  border: 1px solid #d3d0c9;
`;

export const Content = styled.div`
  display: flex;
  height: calc(100vh - 150px);
  grid-area: content;

  margin: 50px auto 0;
  gap: 20px;
  > div {
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
`;

export const MyInfo = styled(Template)`
  flex-direction: column;
  width: 300px;
  height: 600px;
  border-radius: 20px;

  > p {
    text-align: center;
    margin: 70px auto 15px;
  }
  .Header,
  .Info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Info {
    width: 260px;
    height: 286px;
    margin: 0 20px 20px;
    background-color: ${backgroundD};
    border-radius: 15px;
  }
`;

export const BestSeller = styled(Template)`
  justify-content: start;
  width: 300px;
  height: 100%;
  border-radius: 20px 20px 0 0;
  flex-direction: column;
  > h3 {
    margin: 30px 0;
  }
`;
export const Posts = styled(Template)`
  width: 680px;
  height: 150px;
  gap: 15px;
  background-color: ${backgroundD};
  border-radius: 20px;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px #fff2d7;
  }

  > button {
    width: 484px;
    height: 46px;
    display: flex;
    align-items: center;
    padding: 15px 0 15px 20px;
    border-radius: 50px;
    border: none;
  }
`;
export const Feed = styled.div`
  width: 680px;
  height: 100%;
  background-color: ${backgroundL};
  border-radius: 20px;
  overflow-y: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  border: 1px solid #d3d0c9;
`;
export const WhatsNext = styled(Template)`
  grid-area: 1/1;
  flex-direction: column;
  width: 300px;
  height: 140px;
  padding: 10px;
  border-radius: 20px;
  overflow: hidden;
  .next {
    margin-top: 10px;
    width: 140px;
    height: 80px;
    background-image: url(${Header});
    background-position: center;
    background-size: cover;
    border-radius: 15px;
  }
`;

export const Friends = styled.div`
  grid-area: 2/1;
  width: 300px;
  background-color: ${backgroundL};
  border-radius: 20px 20px 0 0;
  border: 1px solid #d3d0c9;
  overflow-y: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .messages {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 15px;
    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  hr {
    width: 90%;
    margin: 5px auto;
  }
`;
