import { Logo } from "../../assets";
import Background from "../../components/common/Background";
import { CardLarge } from "../../components/common/BookCard";
import SearchBar from "../../components/common/SearchBar";
import BestBook from "../../components/main/bestBook";
import { Button } from "../../style/Button";
import * as _ from "./style";

const MainPage = (): JSX.Element => {
  const aa = [{
    "title": "프로젝트 헤일메리",
    "link": "https://search.shopping.naver.com/book/catalog/32463527641",
    "image": "https://shopping-phinf.pstatic.net/main_3246352/32463527641.20230219103402.jpg",
    "author": "앤디 위어",
    "discount": "15990",
    "publisher": "알에이치코리아(RHK)",
    "pubdate": "20210504",
    "isbn": "9788925588735",
    "description": "“이름도 기억 못하는 내가 인류의 희망이라니?”\n멸망 위기의 지구 구하기 프로젝트!\n\n‘헤일메리Hail Mary’는 미식축구 용어로, 경기 막판에 역전을 노리고 하는 패스에서 유래한 말이다. 작품 속 우주선의 이름인 ‘헤일메리호’도 지구를 종말로부터 구하기 위한 마지막 역전을 바라는 마음에 지어졌다. 주인공이 긴 수면 끝에 눈을 뜬 곳은 우주 한복판이었다. 하지만 그는 자신의 이름조차 기억하지 못한다. 설상가상으로 함께 우주선 헤일메리호에 탄 동료들은 모두 죽고 혼자가 된 상황이다. 헤일메리호를 샅샅이 뒤진 끝에, 그는 한 가지 사실을 깨닫는다. 그는 인류를 구할 마지막 희망이자, 우주 한복판에서 죽을 예정인 과학자였다는 것을. \n\n소설 속 지구는 태양의 온도를 떨어트리는 미지의 생명체 ‘아스트로파지’ 로 인해 멸망 위기에 처한 상황이다. 주인공은 그 아스트로파지를 조사하고 해결 방안을 찾기 위해 우주 출장을 오게 된 것이다. 다만, 기술적 한계로 주인공은 아스트로파지를 없앨 해결책만 지구로 보낸 후 우주에서 홀로 죽을 운명이었다. 즉, ‘편도행 헤일메리호’의 일원으로 우주에 왔다. 그런데 잠깐, 우주선 계기판에 무언가 이상한 신호가 잡힌다. 기억을 되찾고 인류를 구하기도 바쁜데 갑자기 외계인의 등장이라니? 과연 그는 지구 구하기 임무를 완수하고 무사히(?) 죽을 수 있을까?"
  },
  {
    "title": "깡샘의 플러터 & 다트 프로그래밍 (다트 핵심 문법 총정리 + 69개 실습으로 크로스 플랫폼 모바일 만들기!)",
    "link": "https://search.shopping.naver.com/book/catalog/37579681630",
    "image": "https://shopping-phinf.pstatic.net/main_3757968/37579681630.20230214162715.jpg",
    "author": "강성윤",
    "discount": "36000",
    "publisher": "이지스퍼블리싱",
    "pubdate": "20230206",
    "isbn": "9791163034568",
    "description": "‘깡샘’으로 유명한 앱 개발 전문가의 명성 그대로!\n다트 핵심 문법을 익히고 플러터로 모바일 앱을 만들어 보자!\n\n매년 수백 명의 개발자를 양성하는 IT 전문 강사이자 안드로이드 베스트셀러의 저자인 ‘깡샘’이 플러터 책으로 돌아왔다. 모바일 앱에서 자주 사용하는 기능을 선별하여 개념과 동작 원리를 친절하게 설명하고 [Do it! 실습]으로 크로스 플랫폼 앱을 만들어 본다. \n이 책은 다트(Dart) 언어의 핵심 문법을 다른 언어와 비교하며 자세히 설명한다. 그리고 각종 위젯으로 앱의 화면을 꾸미고 비동기 프로그래밍으로 성능을 높이는 방법, 데이터 변화를 관리하는 상태 관리 방법 등 개발 현장에서 요구하는 다양한 기술을 다룬다. 또한 플랫폼 채널로 안드로이드와 iOS 네이티브 기능을 이용하는 방법, 파이어베이스와 연동해 사용자 인증, 스토리지, 클라우드 메시지를 다루는 방법도 배울 수 있다."
  }
  ];

  return (
    <Background display="flex" alginItems="center" flexDirection="column">
      <_.Logo src={Logo} />
      <_.Search>
        <SearchBar />
        <BestBook />
        <CardLarge data={aa[0]} />
        <CardLarge data={aa[1]} />
      </_.Search>
    </Background >
  )
}

export default MainPage;