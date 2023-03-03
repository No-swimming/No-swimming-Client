import styled from "styled-components";
import { Logo } from "../../assets";
import { Gray, Transparent } from "../../style/color";

const BookTeacher = (): JSX.Element => {
  const teacher = ["a", "b", "담당선생님", "c"];

  return (
    <Container>
      <Each>
        <p>선택한 책</p>
        <Book>
          <img src={Logo} />
          <div>
            <p>프로젝트 헤일러헤일러헤일러헤일러헤일러헤일러</p>
            <p>엔디웨얼엔디웨얼엔디웨얼엔디웨얼엔디웨얼엔디웨얼엔디웨얼</p>
          </div>
        </Book>
      </Each>
      <div>
        <Each>
          <p>담당 선생님</p>
          <SelectBox>
            {teacher.map((teacher) => {
              <option value="">담당 선생님</option>
              return (
                <option key={teacher} value={teacher}>{teacher}</option>
              )
            })}
          </SelectBox>
        </Each>
      </div>
    </Container>
  )
}

export default BookTeacher;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`

const Each = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  >p{
    margin-left: 4px;
    color: ${Gray[50]};
    font-size: 16px;
  };
`
const Book = styled.div`
  display: flex;
  width: 438px;
  height: 80px;
  background-color: #2D287B;
  border-radius: 8px;
  padding: 4px;
  gap: 8px;
  font-size: 20px;
  >img{
    width: 51px;
    height: 71px;
    border-radius: 4px;
  }
  >div{
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    >p{
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 360px;
      overflow: hidden;
    }
    >p:first-child{
      font-weight: bold;
      color: white;
    }
    >p:last-child{
      color: ${Transparent.White50};
    }
  }
`

const SelectBox = styled.select`
    width: 286px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${Gray[10]};
  padding: 0px 8px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`