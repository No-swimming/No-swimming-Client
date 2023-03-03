import { ReactNode } from "react";
import * as _ from "./style";

type PropsType = {
  children?: ReactNode;
  onClickToggleModal: () => void;
  width?: string;
  height?: string;
  padding?: string;
}

const Modal = ({ children, onClickToggleModal, width, height, padding }: PropsType) => {


  return (
    <_.Container>
      <_.ChildrenContainer width={width} height={height} padding={padding}>
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