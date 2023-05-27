import styled from "styled-components"

type bookType = {
  "book_id": number,
  "book_num": number,
  "title": string,
  "record_reject": boolean,
  "reading_journal_type": string,
  "reading_journal_id": number
}

type Props = {
  bookData: bookType[]
}

const Books = ({ bookData }: Props) => {
  return (
    <Container>
      {bookData.map(d => {
        return <p>{d.title}</p>
      })}
    </Container>
  )
}

export default Books;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
