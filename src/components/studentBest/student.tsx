import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
type StudentType = {
  "name": string,
  "grade": number,
  "journal_count": number
}
const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

const Student = () => {
  const [student, setStudent] = useState<StudentType[]>([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${mono}${server}/rank`,
    })
      .then(function (response) {
        setStudent(response.data.user_ranking_list);
      })
      .catch(function (error) {
        console.log(error)
      });
  })

  return (
    <Container>
      {
        student.map((d: StudentType, i: number) => {
          return (
            <StudentContainer>
              <Title>{i + 1}위</Title>
              <ProfileImg />
              <Content>
                <p>{d.name}</p>
                <p>{d.journal_count}권</p>
              </Content>
            </StudentContainer>
          )
        })
      }
    </Container>
  )
}

export default Student;

const Container = styled.div`
  width: 1321px;
  display: flex;
  gap: 32px 20px;
  flex-wrap: wrap;
`
const StudentContainer = styled.div`
  width: 427px;
  display: flex;
  gap: 20px;
  align-items: center;
`
const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`
const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  >p{
    font-size: 20px;
  }
`