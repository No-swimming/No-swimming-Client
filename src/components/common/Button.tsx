import styled from "styled-components";

type propType = {
  children: string;
  backColor?: string;
  fontColor?: string;
  width?: string;
  height?: string;
};

export const Button = ({ children, fontColor, backColor, width, height }: propType) => {
  return (
    <ButtonContainer backColor={backColor} fontColor={fontColor} width={width} height={height}>{children}</ButtonContainer>
  );
};

const ButtonContainer = styled.button <{ backColor?: string, fontColor?: string, width?: string, height?: string }>`
  background-color: ${props => props.backColor ?? "black"};
  color: ${props => props.fontColor ?? "white"};
  width: ${props => props.width ?? ""};
  height: ${props => props.height ?? "42px"};
  border-radius: 21px;
  padding: 0px 16px;
  font-size: 20px;
`