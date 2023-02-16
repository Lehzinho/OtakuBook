import styled from "styled-components";

export const Container = styled.div`
  grid-area: menu;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.GREENBK};
  color: ${({ theme }) => theme.COLORS.PURPFONT};
  align-items: center;
  justify-content: space-between;
  padding: 25.5px 110px;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.PURPFONT};
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Search = styled.div`
  > button {
    display: flex;
    width: 575px;
    height: 45px;
    border-radius: 50px;
    padding-left: 15px;
    justify-content: start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
`;
export const Menu = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
