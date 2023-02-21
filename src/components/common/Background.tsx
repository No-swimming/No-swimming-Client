import { ReactNode } from "react";
import styled from "styled-components";
import { BookBackground } from "../../assets";

type PropType = {
  children: ReactNode;
  display?: string;
  justifyContent?: string;
  alginItems?: string;
  flexDirection?: string;
}
const Background = ({ children, display, justifyContent, alginItems, flexDirection }: PropType): JSX.Element => {
  return (
    <Container display={display} justifyContent={justifyContent} alginItems={alginItems} flexDirection={flexDirection}>
      {children}
    </Container>
  )
}

export default Background;

const Container = styled.div<{ display?: string, justifyContent?: string, alginItems?: string, flexDirection?: string }>`
  width: 100vw;
  height: calc(100vh - 70px);
  background-image: url(${BookBackground});
  background-repeat: no-repeat;
  background-size: contain;

  display: ${props => props.display ?? ""};
  justify-content: ${props => props.justifyContent ?? ""};
  align-items: ${props => props.alginItems ?? ""};
  flex-direction: ${props => props.flexDirection ?? ""};
`

/*
사용법 
    <Background display="flex" justifyContent="center" alginItems="center" flexDirection="column">
      //작성하고 싶은 내용
    </Background>

    속성 안쓰면 그냥 배경있는 div임
*/