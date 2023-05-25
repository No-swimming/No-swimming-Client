import axios from "axios";
import { useEffect, useState } from "react";
import Books from "../../components/written/books";
import * as _ from "./style";

const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

type bookType = {
  "book_id": number,
  "book_num": number,
  "title": string,
  "record_reject": boolean,
  "reading_journal_type": string,
  "reading_journal_id": number
}

const WrittenBook = () => {
  const [bookData, setBookData] = useState<bookType[]>([{
    "book_id": 1,
    "book_num": 234,
    "title": "유찬홍",
    "record_reject": false,
    "reading_journal_type": "SAVE",
    "reading_journal_id": 2
  }, {
    "book_id": 1,
    "book_num": 234,
    "title": "유찬홍",
    "record_reject": false,
    "reading_journal_type": "SAVE",
    "reading_journal_id": 2
  }, {
    "book_id": 1,
    "book_num": 234,
    "title": "유찬홍",
    "record_reject": false,
    "reading_journal_type": "SAVE",
    "reading_journal_id": 2
  }, {
    "book_id": 1,
    "book_num": 234,
    "title": "유찬홍",
    "record_reject": false,
    "reading_journal_type": "SAVE",
    "reading_journal_id": 2
  }]);

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: `${mono}${server}/journal/list`,
  //     headers: {
  //       "Authorization": `Bearer ${localStorage.getItem("access_token")}`
  //     }
  //   })
  //     .then(function (res) {
  //       console.log(res)
  //     })
  //     .catch(function (error) {
  //       console.error(error)
  //     });
  // }, [])
  return (
    <_.FlexContainer>
      <_.Container>
        <_.Title>
          <h1>작성한 독서록</h1>
          <p>4건</p>
        </_.Title>
        <Books bookData={bookData}/>
      </_.Container>
    </_.FlexContainer>
  )
}

export default WrittenBook;