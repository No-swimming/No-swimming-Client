import { useState } from "react";
import styled from "styled-components";
import { profileImg } from "../../assets";
import { Button } from "../../style/Button";
import { Gray } from "../../style/color";

type Props = {
  profile: number;
}
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

const SelectProfileModal = ({ profile }: Props): JSX.Element => {
  const [selectProfile, setSelectProfile] = useState<number>(profile);

  const Submit = () => {
    /** axios 연결 */
  }

  return (
    <>
      <h1>프로필 이미지 선택</h1>
      <Profile>
        <img src={profileImg[selectProfile]} />
        <Explain>
          <p>{profileExplain[selectProfile].title}</p>
          <p>{profileExplain[selectProfile].explain}</p>
        </Explain>
      </Profile>
      <SelectProfileDiv>
        {
          profileImg.map((img, i) => {
            return (
              <img src={img} onClick={() => { setSelectProfile(i) }} />
            )
          })
        }
      </SelectProfileDiv>
      <SelectButton Black onClick={() => { }}>선택</SelectButton>
    </>
  )
}


export default SelectProfileModal;


const Profile = styled.div`
  display: flex;
  gap: 8px;
  width: 386px;
  > img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 1px solid ${Gray[10]};
  }
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    font-size: 16px;
  }
  > p:first-child {
    font-weight: bold;
    font-size: 20px;
  }
`;

const SelectProfileDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  > img {
    transition: 0.09s ease-in-out;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
      scale: 1.1;
    }
  }
  `;

const SelectButton = styled(Button)`
  width: 386px;
`;
