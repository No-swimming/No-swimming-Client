import styled from "styled-components";
import { CardLarge } from "../common/BookCard";

type Props = {
  bookData: BookDataType | undefined
}
type BookDataType = {
  "lastBuildDate": string;
  "total": number;
  "start": number;
  "display": number;
  "items": BookType[];
};

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
const BookContainer = ({ bookData }: Props) => {
  return (
    <Container>
      {
        bookData?.items.length ?
          bookData?.items.map((data) => {
            return (
              <CardLarge data={data} />
            )
          }) : <Error>검색 결과가 없습니다.</Error>
      }
    </Container>
  )
}

export default BookContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  width: 1320px;
`

const Error = styled.div`
  font-size: 20px;
`