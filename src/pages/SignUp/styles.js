import styled from "styled-components";

export const Container = styled.div`
  width: 1250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 600px;
  height: 600px;
  gap: 40px;
  hr {
    width: 40%;
  }
  > input {
    margin: 0 auto;
    padding-left: 20px;
    width: 450px;
    height: 65px;
    border-radius: 10px;
    border: 2px solid #${({ theme }) => theme.COLORS.PURPFONT};
  }
`;

export const Logo = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 140px;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  text-align: center;
`;
