import styled, { keyframes } from "styled-components";
const backgroundL = ({ theme }) => theme.COLORS.BROUWNBK_100;
const backgroundD = ({ theme }) => theme.COLORS.BROUWNBK_300;

const rotate = keyframes`
0%{
  transform: rotate(0deg);
}
25%{
  transform: rotate(-15deg);}
50%{
  transform: rotate(0deg);
}
75%{
  transform: rotate(15deg);

}
100%{
  transform: rotate(0deg);

}
`;

export const Container = styled.div`
  width: 640px;
  height: fit-content;
  border-radius: 15px;
  margin: 30px auto 0;
  padding: 10px;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: fit-content;
  margin: 0 auto;
  background-color: ${backgroundL};
  border-radius: 15px;
  > img {
    object-fit: contain;
    width: 100%;
    border-radius: 10px;
  }

  > p {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
  }
`;
export const Interaction = styled.div`
  width: fit-content;
  border-radius: 15px;
  padding: 5px 10px 3px;
  border: 1px solid black;
  margin-bottom: -30px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${backgroundL};
  > img {
    cursor: pointer;
  }
  .active {
    animation: ${rotate} 1s linear infinite;
  }
`;
