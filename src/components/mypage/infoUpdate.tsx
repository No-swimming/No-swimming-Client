import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { profileImg } from "../../assets";
import { Button } from "../../style/Button";
import { Gray } from "../../style/color";
import SelectProfileModal from "./selectProfile";

import Input from "../common/Input/Input";

type props = {
  userData: UserData;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type userType = {
  "name": string,
  "profile_num": number,
  "grade": number,
  "class_num": number,
  "number": number
}

const InfoUpdate = ({ userData, isOpenModal, setIsOpenModal }: props): JSX.Element => {
  const [profileModal, setProfileModal] = useState<boolean>(false);

  const [userDataUpdate, setUserDataUpdate] = useState<userType>({
    "name": "noSwimming",
    "profile_num": 0,
    "grade": 0,
    "class_num": 0,
    "number": 0
  });

  const SubmitInfo = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    setUserDataUpdate({
      name: userData.name,
      profile_num: userData.profile_num,
      grade: userData.grade,
      class_num: userData.class_num,
      number: userData.number
    })
  }, [])

  const inputName = (e: any) => {
    console.log(e.target)
  }

  return (
    <>
      {
        profileModal ?
          <SelectProfileModal profile={userDataUpdate} setProfile={setUserDataUpdate} setProfileModal={setProfileModal} /> :
          <>
            <h1>내 정보 수정</h1>
            <UpdateContainer>
              <Profile>
                <img src={profileImg[userDataUpdate.profile_num]} />
                <Button Light onClick={() => { setProfileModal(!profileModal) }}>프로필 이미지 선택</Button>
              </Profile>
              <Input placeholder="이름" id="이름" />
              <Input placeholder="학번" id="학번" />
            </UpdateContainer>
            <Submit>
              <SubmitButton Light onClick={() => { setIsOpenModal(!isOpenModal) }}>취소</SubmitButton>
              <SubmitButton Black onClick={SubmitInfo}>저장</SubmitButton>
            </Submit>
          </>
      }
    </>
  )
}
export default InfoUpdate;

const UpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  gap: 12px;
  `
const Profile = styled.div`
  display: flex;
  gap: 12px;
  >img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`

const Submit = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`
const SubmitButton = styled(Button)`
  width: 50%;
`