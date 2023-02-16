import styled from "styled-components";
const backgroundL = ({ theme }) => theme.COLORS.BROUWNBK_100;
const backgroundD = ({ theme }) => theme.COLORS.BROUWNBK_300;

export const Container = styled.div`
  width: 640px;
  height: fit-content;
  border-radius: 15px;
  margin: 15px auto 0;
  padding-bottom: 20px;
  background-color: ${backgroundD};
`;
export const User = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  padding: 15px 0 15px 25px;
  font-size: 20px;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px #fff2d7;
  }
`;
export const Content = styled.div`
  width: 600px;
  min-height: 145px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${backgroundL};
  border-radius: 15px;
`;
export const Interaction = styled.div``;
