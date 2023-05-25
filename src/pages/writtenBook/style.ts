import styled from "styled-components";
import { Transparent } from "../../style/color";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  gap: 8px;
  > h1 {
    font-size: 32px;
  }
  > p {
    font-size: 32px;
    color: ${Transparent.Black50};
  }
`;
