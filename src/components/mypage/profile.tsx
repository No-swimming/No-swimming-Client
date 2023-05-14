import styled from "styled-components";
import { Button } from "../../style/Button";
import { Basic, Gray, Transparent } from "../../style/color";
import { profileImg } from "../../assets";
import Modal from "../common/modal";
import { useState } from "react";
import InfoUpdate from "./infoUpdate";
import SelectProfileModal from "./selectProfile";

const profileExplain = [
  { title: "기본", explain: "정석적인 기본 프로필" },
  { title: "별", explain: "항성에는 장미가 살 수 없습니다" },
  { title: "픽셀", explain: "나의 라임색 픽셀" },
  { title: "수영 금지", explain: "여기서 수영 하시면 안 됩니다" },
  { title: "눈", explain: "큰 형님이 보고 계십니다" },
  { title: "무지개 색", explain: "다양성을 상징하기도 합니다" },
  { title: "고래", explain: "모비 딕 또는 고래" },
  { title: "이십칠", explain: "삼 곱하기 구" },
  { title: "틱 택 토", explain: "무승부!" },
  { title: "다이아몬드", explain: "오랜 시간을 기다렸지" }
];

const userData = {
  "email": "coiwyoaj",
  "name": "null",
  "grade": 1,
  "class_num": 1,
  "number": 15,
  "count_reject_book": 0,
  "count_read_book": 0,
  "my_rank": 4,
  "profile_num": 2
};

const Profile = (): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const [updataData, setUpdateData] = useState({
    profile_num: 1,
    name: 1,
    grader_num: 1111
  })

  const handleInputChange = (props: string) => (event: any) => {
    setUpdateData({ ...updataData, [props]: event.target.value });
  };


  return (
    <>
      {
        isOpenModal &&
        <Modal onClickToggleModal={onClickToggleModal} display="flex" alignItems="center" flexDirection="column" gap="52px">
          <InfoUpdate userData={userData} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
        </Modal>
      }
      <Container>
        <div>
          <img src={profileImg[userData.profile_num]} />
          <div>
            <Name><div><p>학생</p></div><h1>김이름</h1></Name>
            <p>{userData.grade}학년 {userData.class_num}반 {userData.number}번</p>
            <p>{userData.email}</p>
            <p>{profileExplain[userData.profile_num].explain}</p>
          </div>
        </div>
        <Button Black onClick={onClickToggleModal}>내 정보 수정</Button>
      </Container>
    </>
  )
}

export default Profile;

const Container = styled.div`
  background-color: ${Gray.Elevated0};
  width: 70vw;
  border-radius: 8px;
  padding: 20px;
  >div{
    margin-bottom: 16px;
    gap: 16px;
    display: flex;
    >img{
      width: 128px;
      height: 128px;
      border-radius: 50%;
    }
    >div{
      gap: 4px;
      >p{
        font-size: 20px;
        color: ${Transparent.Black50}
      }
    }
  }
`

const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  >div:first-child{
    padding: 2px;
    background-color: ${Basic.black0};
    color: white;
    border-radius: 4px;
    text-align: center;
  };
`