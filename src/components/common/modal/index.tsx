import { ReactNode, useEffect } from "react";
import * as _ from "./style";

type PropsType = {
  children?: ReactNode;
  onClickToggleModal: () => void;
  width?: string;
  height?: string;
  padding?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  flexDirection?: string;
}

const Modal = ({ children, onClickToggleModal, width, height, padding, display, justifyContent, gap, flexDirection, alignItems }: PropsType) => {

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  
  return (
    <_.Container>
      <_.ChildrenContainer width={width} height={height} padding={padding} display={display} justifyContent={justifyContent} gap={gap} flexDirection={flexDirection} alignItems={alignItems}>
        {children}
      </_.ChildrenContainer>
      <_.BackDrop onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        onClickToggleModal();
      }} />
    </_.Container >
  )
}

export default Modal;


/**
 * 모달 사용법
 * 시용하려는 페이지에 적용
 * useCallback은 많이 사용하는 모달에서만 사용하세요. 오히려 최적화가 아니라 속도가 느려집니다.
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
      <>
        {
          isOpenModal &&
          <Modal onClickToggleModal={onClickToggleModal} width="1000px" height="500px" padding="200px">
            //모달만에 들어갈 내용 작성
          </Modal>
        }
        //나머지 페이지 제작 코그
      </>
    )
  }

 */