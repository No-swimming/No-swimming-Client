import styled from "styled-components";
import { useState, useEffect } from "react";
import { Gray, Transparent } from "../../style/color";
import { BookData } from "../../function/bookData";
import SelectProfileModal from "./selectProfile";
import Modal from "../common/modal";

const BookList = (): JSX.Element => {
  const [book, setBook] = useState({
    "journal_list": [
      {
        "book_id": 1,
        "book_num": 9781408856772,
        "record_reject": false,
        "is_rejected": false
      }, {
        "book_id": 1,
        "book_num": 9788983927729,
        "record_reject": true,
        "is_rejected": false
      }, {
        "book_id": 1,
        "book_num": 9788983927651,
        "record_reject": false,
        "is_rejected": false
      }, {
        "book_id": 1,
        "book_num": 9788983927651,
        "record_reject": false,
        "is_rejected": true
      }, {
        "book_id": 1,
        "book_num": 9781408856772,
        "record_reject": false,
        "is_rejected": false
      }
    ]
  })

  return (
    <>
      <Container>
        <div>
          <h1>내 독서록</h1>
          <button>모두 보기</button>
        </div>
        {
          book.journal_list.slice(0, 4).map((data) => {
            const info = BookData(data.book_num);
            return (
              <BookContainer>
                <div>
                  <Title></Title>
                  <BookInfo>{info.title} - {info.author}</BookInfo>
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