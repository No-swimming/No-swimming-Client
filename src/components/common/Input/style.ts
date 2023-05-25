import styled from "styled-components";
import { Basic, Gray } from "../../../style/color";
export const Container = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "")};
`;
export const MainInputContainer = styled.label`
  color: ${Gray[50]};
  padding-left: 4px;
`;

export const InputBox = styled.div`
  background-color: ${Basic.white};
  border: 1px ${Gray[10]} solid;
  border-radius: 8px;
  padding: 12px;

  display: flex;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  & > input {
    background: none;
    border: none;
    outline: none;

    font-size: 20px;
    width: -webkit-fill-available;
  }
`;
