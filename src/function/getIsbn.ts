import axios from "axios";

const NAVER_ID = process.env.REACT_APP_NAVER_ID;
const NAVER_SECRET_KEY = process.env.REACT_APP_NAVER_SECRET_KEY;
const corsUrl = process.env.REACT_APP_MONO;
const openNaverUrl = `${process.env.REACT_APP_SEARCH_BOOK}?display=1&query=`;

export const getIsbnArr = (bookName: string[]) => {
  const book: number[] = [];

  bookName.map((data) => {
    if (localStorage.getItem(data)) {
      book.push(Number(localStorage.getItem(data)!));
    } else {
      const axiosBook = {
        method: "get",
        url: `${corsUrl}${openNaverUrl}${data}`,
        headers: {
          "X-Naver-Client-Id": NAVER_ID,
          "X-Naver-Client-Secret": NAVER_SECRET_KEY,
        },
      };

      axios(axiosBook).then((isbn) => {
        localStorage.setItem(data, isbn.data.items[0].isbn);
        book.push(Number(isbn.data.items[0].isbn));
      });
    }
  });
  return book;
};
