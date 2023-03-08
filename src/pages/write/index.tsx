import BookTeacher from "../../components/write/bookTeacher";
import BookWrite from "../../components/write/bookWrite";
import * as _ from "./style";
import { useState } from "react";
import Submit from "../../components/write/submit";

type valueType = {
  teacher_id: number;
  title: string;
  content: string;
};
const Write = (): JSX.Element => {
  const [value, setValue] = useState<valueType>({
    teacher_id: 0,
    title: "",
    content: "",
  });

  const handleInputChange = (props: string) => (event: any) => {
    setValue({ ...value, [props]: event.target.value });
  };

  const onClickSubmit = () => { };
  const onClickNoSubmit = () => { };

  return (
    <_.Container>
      <h1>독서록 작성</h1>
      <BookTeacher />
      <BookWrite value={value} handleInputChange={handleInputChange} setValue={setValue} />
      <Submit />
    </_.Container>
  )
}

export default Write;