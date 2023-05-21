import axios from "axios";
import { useEffect, useState } from "react";
import BookList from "../../components/mypage/bookList";
import Profile from "../../components/mypage/profile";
import Rank from "../../components/mypage/rank";
import * as _ from "./style";
const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

type userType = {
  "email": string,
  "name": string,
  "grade": number,
  "class_num": number,
  "number": number,
  "count_reject_book": number,
  "count_read_book": number,
  "my_rank": number,
  "profile_num": number
};

const MyPage = (): JSX.Element => {
  const [user, setUser] = useState<userType>({
    "email": "NoSwimmin@dsm.hs.kr",
    "name": "noSwimming",
    "grade": 1,
    "class_num": 1,
    "number": 24,
    "count_reject_book": 0,
    "count_read_book": 0,
    "my_rank": 0,
    "profile_num": 0
  });

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: `${mono}${server}/student`,
  //   })
  //     .then(function (response) {
  //       setUser(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log("학생 정보",error)
  //     });
  // });

  return (
    <_.Container>
      <Profile user={user} />
      <_.Info>
        <_.RankContainer>
          <Rank color="#F8D5A0" sub="제출한 독서록" main={`${user.count_reject_book}개`} />
          <Rank color="#CCE9AF" sub="읽음 표시한 책" main={`${user.count_read_book}권`} />
          <Rank color="#BFB8E0" sub="학생 랭크" main={`${user.my_rank}위`} />
        </_.RankContainer>
        <BookList />
      </_.Info>
    </_.Container>
  )
}

export default MyPage;