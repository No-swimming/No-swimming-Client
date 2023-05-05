import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../../components/common/search/pagination";
import * as _ from "./style";

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
const mono = "http://monotype.iptime.org:10888/";
const url = "https://openapi.naver.com/v1/search/book";

const Search = () => {
  const { book, start } = useParams();
  const [bookData, setBookData] = useState<BookDataType>();

  useEffect(() => {
    axios({
      method: 'get',
      url: `${mono}${url}?query=${book}&display=8&start=${Number(start)*8}`,
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET_KEY
      }
    })
      .then(function (response) {
        console.log(response.data);
        setBookData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [start])

  return (
    <_.Container>
      <div>
        <h1>검색 결과</h1>
        <p>{bookData?.total}건</p>
      </div>
      
      <_.Seach inputValue={book} blur="24px" />

      <Pagination total={bookData?.total}/>
    </_.Container>
  )
}

export default Search;