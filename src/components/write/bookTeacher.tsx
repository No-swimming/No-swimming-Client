import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Gray } from "../../style/color";

const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

type Props = {
  setValue: React.Dispatch<React.SetStateAction<valueType>>;
  value: valueType;
}

type valueType = {
  teacher_id: number;
  title: string;
  content: string;
};

type TeacherType = {
  teacher_id: number;
  teacher_name: string;
  subject?: string;
}

const BookTeacher = ({ setValue, value }: Props): JSX.Element => {
  const [teacher, setTeacher] = useState<TeacherType[]>([]);
  const { isbn } = useParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `${mono}${server}/teacher/list`,
    })
      .then(function (res) {
        setTeacher(res.data.teacher_list)
      })
      .catch(function (error) {
        console.error(error)
      });
  }, [])

  const onChangeValue = (e: any) => {
    setValue({ ...value, teacher_id: e.target.value })
  }

  return (
    <Container>
      <Each>
        <p>선택한 책</p>
        <p>{isbn}</p>
      </Each>
      <div>
        <Each>
          <p>담당 선생님</p>
          <SelectBox onChange={e => onChangeValue(e)}>
            {teacher.map((teacher) => {
              <option value="">담당 선생님</option>
              return (
                <option key={teacher.teacher_id} value={teacher.teacher_id}>{teacher.teacher_name}</option>
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