import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gray } from "../../style/color";

const BESTBOOK_KEY = process.env.REACT_APP_BESTBOOK_KEY;
const corsUrl = "http://monotype.iptime.org:10888/";
const bookUrl = `http://apis.data.go.kr/6260000/BookSearchWordBestService/getBookSearchWordBest?serviceKey=${BESTBOOK_KEY}`
const axiosBook = {
  method: 'get',
  url: `${corsUrl}${bookUrl}`,
  params: {
    numOfRows: 10,
    pageNo: 1,
    resultType: 'json'
  }
}

type bookType = { search_word: string, rank: string, type: string }

const BestBook = (): JSX.Element => {
  const navigate = useNavigate();
  const [book1, setBook1] = useState("흔한 남매");
  const [book2, setBook2] = useState("불편한 편의점");
  const [book3, setBook3] = useState("아버지의 해방일지");
  useEffect(() => {
    if (!sessionStorage.getItem("book1")) {
      axios(axiosBook)
        .then(res => {
          const list = res.data.getBookSearchWordBest.body.items.item;
          sessionStorage.setItem("book1", list[9].search_word);
          sessionStorage.setItem("book2", list[8].search_word);
          sessionStorage.setItem("book3", list[7].search_word);
        })
        .catch(err => {
          console.log(err)
        })
    }
    setBook1(() => sessionStorage.getItem("book1") || "흔한남매")
    setBook2(() => sessionStorage.getItem("book2") || "불편한 편의점")
    setBook3(() => sessionStorage.getItem("book") || "아버지의 해방일지")
  }, [])


  return (
    <Container>
      <div>
        <Title>인기 도서</Title>
        <Line>|</Line>
        <Books>
          <p onClick={() => navigate(`/search/${book1}`)}>{book1}</p>
          <p onClick={() => navigate(`/search/${book2}`)}>{book2}</p>
          <p onClick={() => navigate(`/search/${book3}`)}>{book3}</p>
        </Books>
      </div>
      <Plus>+ 더보기</Plus>
    </Container >
  )
}

export default BestBook;

const Container = styled.div`
  display: flex;
          justify-content: space-between;
          width: 768px;
          font-size: 20px;
          color: ${Gray[50]};
          margin-top: 12px;
          margin-bottom: 15vh;
  >div{
            display: flex;
          gap: 12px;
          width: 688px;
          height: 26.4px;
  }
          `
          const Title = styled.p`
          font-weight: bold;
          width: 75.5px;
          white-space : nowrap;
          `
          const Line = styled.p`
          color: ${Gray[25]};
          `
          const Books = styled.div`
          display: flex;
          gap: 12px;
  >p{
            cursor: pointer;
  }
          `
          const Plus = styled.button`
          background-color: rgba(0,0,0,0);
          border: none;
          font-size: 20px;
          color:${Gray[50]};
          cursor: pointer;
          `