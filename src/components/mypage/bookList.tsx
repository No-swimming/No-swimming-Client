import styled from "styled-components";
import { useState, useEffect } from "react";
import { Gray, Transparent } from "../../style/color";
import { BookData } from "../../function/bookData";
import axios from "axios";

type BookType = {
  title: string;
  link: string;
  image: string;
  author: string;
  discount: string;
  publisher: string;
  pubdate: string;
  isbn: string;
  description: string;
};

type axiosBookType = {
  "book_id": number,
  "book_num": number,
  "record_reject": boolean,
  "is_rejected": boolean
}

const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

const BookList = (): JSX.Element => {
  const [book, setBook] = useState<axiosBookType[]>([])

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: `${mono}${server}/journal/student`,
  //   })
  //     .then(function (response) {
  //       setBook(response.data.journal_list);
  //     })
  //     .catch(function (error) {
  //       console.log("학생 책 목록",error)
  //     });
  // })

  return (
    <>
      <Container>
        <div>
          <h1>내 독서록</h1>
          <button>{book[0] ? "모두 보기" : "없음"}</button>
        </div>
        {
          book.slice(0, 4).map((data) => {
            return (
              <BookContainer>
                <div>
                  <Title></Title>
                  <BookInfo> - </BookInfo>
                </div>
                <State>
                  {
                    data.record_reject ? "임시 저장" : data.is_rejected ? "마감됨" : "제출 완료"
                  }
                </State>
              </BookContainer>
            )
          })
        }
      </Container>
    </>
  )
}

export default BookList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  >div{
    width:calc(70vw - 180px);
    display: flex;
    justify-content: space-between;
    >button{
      background-color: white;
      border: 0;
      outline: none;
    }
  }
`
const BookContainer = styled.div`
  border-radius: 8px;
  background-color: ${Gray.Elevated0};
  width: calc(70vw - 180px);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.07s ease-in-out;
  &:hover{
    scale: 1.005;
    box-shadow: 0 0 8px 0px ${Transparent.Black25};
  }
  >div{
    gap: 20px;
    display: flex;
    width: calc(70vw - 275px);
  }
`
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 30%;
`
const BookInfo = styled.p`
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 20%;
  color: ${Gray[50]}
`

const State = styled.p`
  color: ${Gray[50]}
`