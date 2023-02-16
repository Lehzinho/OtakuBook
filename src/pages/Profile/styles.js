import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "menu"
    "content";
`;
export const Content = styled.div`
  width: 800px;
  margin: 80px auto 0;
`;
export const MyInfo = styled.div`
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.COLORS.BROUWNBK_100};
  border: 1px solid #d3d0c9;
  border-radius: 15px;
  > h1 {
    text-align: center;
    margin-top: 100px;
  }

  > form {
    display: flex;
    gap: 30px;
    width: 485px;
    margin: 60px auto;
    flex-direction: column;
    > input {
      height: 50px;
      border-radius: 50px;
      text-align: center;
    }
  }
`;
