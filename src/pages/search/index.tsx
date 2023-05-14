import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/common/SearchBar";
import BookContainer from "../../components/search/bookContainer";
import Pagination from "../../components/search/pagination";
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

const mono = process.env.REACT_APP_MONO;
const bestBook = process.env.REACT_APP_SEARCH_BOOK;

const Search = () => {
  const { book, start } = useParams();
  const [bookData, setBookData] = useState<BookDataType>();

  useEffect(() => {
    axios({
      method: 'get',
      url: `${mono}${bestBook}?query=${book}&display=8&start=${1 + (Number(start) - 1) * 8}`,
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET_KEY
      }
    })
      .then(function (response) {
        setBookData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [start, book]);

  return (
    <_.Container>
      <_.SearchContainer>
        <div>
          <h1>검색 결과</h1>
          <p>{bookData?.total}건</p>
        </div>

        <SearchBar inputValue={book!} />
      </_.SearchContainer>
      <BookContainer bookData={bookData} />

      <Pagination start={Number(start)} book={book!} total={bookData?.total!}/>
    </_.Container>
  )
}

export default Search;