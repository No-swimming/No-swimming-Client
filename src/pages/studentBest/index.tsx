import Student from "../../components/studentBest/student";
import * as _ from "./style";

const StudentBest = () => {
  return (
    <_.FlexContainer>
      <_.Container>
        <h1>학생 랭크</h1>

        <Student />

      </_.Container>
    </_.FlexContainer>
  )
}


export default StudentBest;