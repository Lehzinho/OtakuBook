import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  border-bottom: none;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  > span {
    width: 100px;
    border-bottom: 1px solid #d3d0c9;
  }
`;
