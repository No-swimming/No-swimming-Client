import styled from "styled-components";
import { Button } from "../../style/Button";

const Submit = (): JSX.Element => {
  return (
    <Container>
      <Button Black>제출</Button>
      <Button Light>임시 저장</Button>

      {/* <Button Light>맞춤법 검사</Button> */}
    </Container>
  )
}

export default Submit;

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`