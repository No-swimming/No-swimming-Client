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
    <>{bookData.map(d=>{
      return <p>{d.title}</p>
    })}</>
  )
}

export default Books;