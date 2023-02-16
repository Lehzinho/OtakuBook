import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(26, 26, 26, 0.62);
  position: relative;
  z-index: 0;
`;
export const Canvas = styled.div`
  width: 600px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.BROUWNBK_100};
  border-radius: 15px;
  border: 1px solid #836629;
  position: relative;

  padding: 40px;
`;
export const File = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 484px;
  height: 50px;
  box-shadow: inset 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: white;
  > input {
    ::-webkit-file-upload-button {
      cursor: pointer;
      width: 103px;
      height: 33px;
      background: ${({ theme }) => theme.COLORS.GREENBK};
      border-radius: 50px;
      margin-right: 40px;
    }
  }
`;

export const AvatarText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  > textarea {
    padding: 20px;
    width: 350px;
    height: 130px;
    border-radius: 50px;
    box-shadow: inset 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
    resize: none;
  }
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
