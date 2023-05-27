import BookTeacher from "../../components/write/bookTeacher";
import BookWrite from "../../components/write/bookWrite";
import Submit from "../../components/write/submit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as _ from "./style";
import axios from "axios";

const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

type valueType = {
  teacher_id: number;
  title: string;
  content: string;
};

const Write = (): JSX.Element => {
  const { isbn } = useParams();
  const [value, setValue] = useState<valueType>({
    teacher_id: 0,
    title: "",
    content: "",
  });

  const [bookIsbn, setBookIsbn] = useState<string>();

  useEffect(() => {
    setBookIsbn(isbn);
  }, [])

  const handleInputChange = (props: string) => (event: any) => {
    setValue({ ...value, [props]: event.target.value });
  };


  const onClickSubmit = () => {

  };
  const onClickNoSubmit = () => {
    axios({
      method: 'post',
      url: `${mono}${server}/journal/${bookIsbn}`,
      data: value
    })
      .then(function (res) {
      })
      .catch(function (error) {
        console.error(error)
      });
  };

  return (
    <_.Container>
      <h1>독서록 작성</h1>
      <BookTeacher value={value} setValue={setValue} />
      <BookWrite value={value} handleInputChange={handleInputChange} setValue={setValue} />
      <Submit onClickSubmit={onClickSubmit} onClickNoSubmit={onClickNoSubmit} />
    </_.Container>
  )
}

export default Write;