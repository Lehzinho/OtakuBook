import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(26, 26, 26, 0.62);
  position: absolute;
  z-index: -2;
`;
export const Canvas = styled.div`
  width: 960px;
  height: fit-content;
  background-color: ${({ theme }) => theme.COLORS.BROUWNBK_100};
  border-radius: 15px;
  position: relative;
  padding: 20px;

  > h3 {
    margin: 15px 0;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    gap: 20px;
    > img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20px;
`;
export const Likes = styled.div`
  width: 180px;
  height: 40px;
  border: 1px solid #541b56;
  background-color: ${({ theme }) => theme.COLORS.GREENBK};
  border-radius: 15px;
`;
export const Frame = styled.div`
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  position: absolute;
  top: -20px;
  left: -20px;
  border-radius: 15px;
  z-index: -1;
  background-color: ${({ theme }) => theme.COLORS.BROUWNBK_300};
  > svg {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.BROUWNBK_300};
    color: ${({ theme }) => theme.COLORS.BROUWNBK_100};
    border-radius: 50%;
    font-size: 32px;
    position: absolute;
    right: -10px;
    top: -10px;
  }
`;
export const Comments = styled.div`
  padding: 10px;
  border-radius: 15px;
  height: 150px;
  width: 100%;
  background-color: white;
  border: 1px solid #541b56;
`;
