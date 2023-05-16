import BookList from "../../components/mypage/bookList";
import Profile from "../../components/mypage/profile";
import Rank from "../../components/mypage/rank";
import * as _ from "./style";

const MyPage = (): JSX.Element => {

  return (
    <_.Container>
      <Profile />
      <_.Info>
        <_.RankContainer>
          <Rank color="#F8D5A0" sub="제출한 독서록" main={`4개`} />
          <Rank color="#CCE9AF" sub="읽음 표시한 책" main={`4권`} />
          <Rank color="#BFB8E0" sub="학생 랭크" main={`4위`} />
        </_.RankContainer>
        <BookList />
      </_.Info>
    </_.Container>
  )
}

export default MyPage;