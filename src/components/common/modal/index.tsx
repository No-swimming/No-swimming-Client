import { ReactNode } from "react";
import * as _ from "./style";

type PropsType = {
  children?: ReactNode;
  onClickToggleModal: () => void;
  width?: string;
  height?: string;
  padding?: string;
  display?: string;
  justifyContent?: string;
  gap?: string;
}

const Modal = ({ children, onClickToggleModal, width, height, padding, display, justifyContent, gap }: PropsType) => {


  return (
    <_.Container>
      <_.ChildrenContainer width={width} height={height} padding={padding} display={display} justifyContent={justifyContent} gap={gap}>
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