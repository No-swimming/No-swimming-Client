import styled from "styled-components";
import { Transparent } from "../../../style/color";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const ChildrenContainer = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
}>`
  background-color: white;
  width: ${(props) => props.width ?? "466px"};
  height: ${(props) => props.height ?? ""};
  border-radius: 8px;
  z-index: 10000;
  padding: ${(props) => props.padding ?? "40px 39px"};
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(${Transparent.Black50});
`;
