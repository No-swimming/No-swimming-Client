import styled from "styled-components";
import { Gray } from "../../style/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 45px;
`;

export const SearchContainer = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  > div {
    display: flex;
    gap: 8px;
    > p {
      color: ${Gray[50]};
      font-size: 32px;
    }
  }
`;

export const PageContainer = styled.div``;
