import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gray } from "../../style/color";

const corsUrl = process.env.REACT_APP_MONO;
const bookUrl = process.env.REACT_APP_BEST_BOOK;
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
  const [books, setBooks] = useState<string[]>([]);

  useEffect(() => {
    if (!sessionStorage.getItem("book1")) {
      axios(axiosBook)
        .then(res => {
          let list = res.data.getBookSearchWordBest.body.items.item.map((data: bookType) => data.search_word);
          sessionStorage.setItem("best", JSON.stringify(list.reverse()))
        })
        .catch(err => {
          console.log(err)
        })
    }
    setBooks(JSON.parse(sessionStorage.getItem("best") || ""))
  }, [])

  return (
    <Container>
      <div>
        <Title>인기 도서</Title>
        <Line>|</Line>
        <Books>
          {
            books.slice(0,3).map((data) => {
              return <p key={data} onClick={() => navigate(`search/${data}/1`)}>{data}</p>
            })
          }
        </Books>
      </div>
      <Plus onClick={() => navigate('/best')}>+ 더보기</Plus>
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