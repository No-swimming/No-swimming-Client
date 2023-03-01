import BookTeacher from "../../components/pages/write/bookTeacher";
import * as _ from "./style";

const Write = (): JSX.Element => {
  return (
    <_.Container>
      <h1>독서록 작성</h1>
      <BookTeacher />
    </_.Container>
  )
}

export default Write;