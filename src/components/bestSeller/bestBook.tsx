import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookDataArr } from "../../function/bookData";
import { getIsbnArr } from "../../function/getIsbn";
import { CardLarge } from "../common/BookCard";


type BookType = {
  "title": string;
  "link": string;
  "image": string;
  "author": string;
  "discount": string;
  "publisher": string;
  "pubdate": string;
  "isbn": string;
  "description": string;
};

const BestBook = () => {
  const [books, setBooks] = useState<number[]>([]);
  const [bookData, setBookData] = useState<BookType[]>([]);

  useEffect(() => {
    setBooks(getIsbnArr(JSON.parse(sessionStorage.getItem("best") || "")))
  }, []);

  useEffect(() => {
    setBookData(BookDataArr(books))
  }, [books])

  return (
    <Container>
      {
        bookData.map((data, i) => {
          return (
            <BookContainer>
              <Rank>{i + 1}위</Rank>
              <CardLarge data={data} />
            </BookContainer>
          )
        })
      }

    </Container>
  )
}

export default BestBook;

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Rank = styled.p`
  font-size: 28px;
  font-weight: bold;
`