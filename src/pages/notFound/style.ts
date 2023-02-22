import styled from "styled-components";
import { Gray } from "../../style/Share/color";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  > h1 {
    font-size: 48px;
  }
`;

export const Error404 = styled.p`
  font-size: 20px;
  color: ${Gray[50]};
  font-weight: bold;
`;

export const ErrorExplain = styled.p`
  font-size: 20px;
  text-align: center;
`;
