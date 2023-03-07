import styled from "styled-components";
import { Transparent } from "../../../style/color";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -44%);
`;

export const ChildrenContainer = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;
}>`
  background-color: white;
  width: ${(props) => props.width ?? "466px"};
  height: ${(props) => props.height ?? ""};
  border-radius: 8px;
  z-index: 10000;
  padding: ${(props) => props.padding ?? "40px 39px"};
  display: ${(props) => props.display ?? ""};
  justify-content: ${(props) => props.justifyContent ?? ""};
  align-items: ${(props) => props.alignItems ?? ""};
  flex-direction: ${(props) => props.flexDirection ?? ""};
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(${Transparent.Black50});
`;
