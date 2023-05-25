import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  > h1 {
    margin-top: 45px;
  }
`;