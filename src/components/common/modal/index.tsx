import { ReactNode, useEffect } from "react";
import * as _ from "./style";

type PropsType = {
  onClickToggleModal: () => void;
  children?: ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  flexDirection?: string;

  background?: boolean;
}


const Modal = ({ background, children, onClickToggleModal, width, height, padding, display, justifyContent, gap, flexDirection, alignItems }: PropsType) => {

  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
    return () => { document.body.style.cssText = `overflow: auto` }
  }, []);

  return (
    <_.BackGround onClick={() => background ? () => { } : onClickToggleModal()} >
      <_.ChildrenContainer onClick={(e: any) => e.stopPropagation()} background={background} width={width} height={height} padding={padding} display={display} justifyContent={justifyContent} gap={gap} flexDirection={flexDirection} alignItems={alignItems}>
        {children}
      </_.ChildrenContainer>
    </_.BackGround>

  )
}

export default Modal;