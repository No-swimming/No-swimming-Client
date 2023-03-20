import React, { useState } from "react";
import styled from "styled-components";
import { profileImg } from "../../assets";
import { Button } from "../../style/Button";
import { Gray } from "../../style/color";
import SelectProfileModal from "./selectProfile";

type props = {
  userData: UserData;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const InfoUpdate = ({ userData, isOpenModal, setIsOpenModal }: props): JSX.Element => {
  const [profileModal, setProfileModal] = useState<boolean>(false);

  /** 정보 수정 axios */
  const SubmitInfo = () => {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      {
        profileModal ?
          <SelectProfileModal profile={userData.profile_num} /> :
          <>
            <h1>내 정보 수정</h1>
            <UpdateContainer>
              <Profile>
                <img src={profileImg[userData.profile_num]} />
                <Button Light onClick={() => { setProfileModal(!profileModal) }}>프로필 이미지 변경</Button>
              </Profile>
              <InputContainer>
                <p>이름</p>
                <input placeholder="이름" />
              </InputContainer>
              <InputContainer>
                <p>학번</p>
                <input placeholder="학번" />
              </InputContainer>
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
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  >p{
  font-size: 16px;
  color: ${Gray[50]};
  }
  >input{
  height: 50px;
  border: 1px solid ${Gray[10]};
  border-radius: 8px;
  padding: 8px;
  outline: 0px;
  font-size: 20px;
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