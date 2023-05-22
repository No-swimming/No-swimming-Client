import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { profileImg } from "../../assets";
import { Button } from "../../style/Button";
import { Gray } from "../../style/color";
import SelectProfileModal from "./selectProfile";

import Input from "../common/Input/Input";
import axios from "axios";

type props = {
  userData: UserData;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;


const InfoUpdate = ({ userData, isOpenModal, setIsOpenModal }: props): JSX.Element => {
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const [data, setData] = useState({
    name: "noSwimming",
    number: 1101
  })
  const [userProfileNum, setUserProfileNum] = useState<number>(0);

  const changeInputName = (e: any) => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }


  const SubmitInfo = () => {
    setIsOpenModal(!isOpenModal);
    let studentNumber = String(data.number).split("");

    axios({
      method: 'put',
      url: `${mono}${server}/student`,
      data: {
        "name": data.name,
        "profile_num": userProfileNum,
        "grade": Number(studentNumber[0]),
        "class_num": Number(studentNumber[1]),
        "number": Number(studentNumber[2] + studentNumber[3])
      }
    })
      .then(() => {
        alert("정보를 수정했습니다.");
      })
      .catch(function (error) {
        console.log(error)
      });
  };



  useEffect(() => {
    setUserProfileNum(userData.profile_num)
    setData({ ...data, name: userData.name })
  }, [])



  return (
    <>
      {
        profileModal ?
          <SelectProfileModal profile={userProfileNum} setProfile={setUserProfileNum} setProfileModal={setProfileModal} /> :
          <>
            <h1>내 정보 수정</h1>
            <UpdateContainer>
              <Profile>
                <img src={profileImg[userProfileNum]} />
                <Button Light onClick={() => { setProfileModal(!profileModal) }}>프로필 이미지 선택</Button>
              </Profile>
              <Input placeholder="이름" id="name" onChange={(e) => changeInputName(e)} value={data.name} />
              <Input placeholder="학번" id="number" onChange={(e) => changeInputName(e)} value={String(data.number)} number min={1101} max={3420} />
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