import axios from "axios";

const NAVER_ID = process.env.REACT_APP_NAVER_ID;
const NAVER_SECRET_KEY = process.env.REACT_APP_NAVER_SECRET_KEY;
const corsUrl = "http://monotype.iptime.org:10888/";
const openNaverUrl =
  "https://openapi.naver.com/v1/search/book_adv.json?d_isbn=";
{
}
/** 책 정보 가져오는 함수
 * 무조건 isbn으로 보내줘야함!!
 * 숫자 배열 -> json배열
 */
export const BookDataArr = (number: number[]) => {
  const book: string[] = [];
  number.map((isbn) => {
    if (localStorage.getItem(String(isbn))) {
      book.push(JSON.parse(localStorage.getItem(String(isbn)) || "{}"));
    } else {
      const axiosBook = {
        method: "get",
        url: `${corsUrl}${openNaverUrl}${isbn}`,
        headers: {
          "X-Naver-Client-Id": NAVER_ID,
          "X-Naver-Client-Secret": NAVER_SECRET_KEY,
        },
      };

      axios(axiosBook).then((data) => {
        localStorage.setItem(String(isbn), JSON.stringify(data.data.items[0]));
        book.push(data.data.items[0]);
      });
    }
  });
  return book;
};

/** 책 정보 가져오는 함수
 * 무조건 isbn으로 보내줘야함!!
 * 숫자 -> json
 */
export const BookData = (isbn: number) => {
  if (localStorage.getItem(String(isbn))) {
    return JSON.parse(localStorage.getItem(String(isbn)) || "{}");
  } else {
    const axiosBook = {
      method: "get",
      url: `${corsUrl}${openNaverUrl}${isbn}`,
      headers: {
        "X-Naver-Client-Id": NAVER_ID,
        "X-Naver-Client-Secret": NAVER_SECRET_KEY,
      },
    };
    axios(axiosBook).then((data) => {
      return data.data.items[0];
    });
  }
};
