import styled from "styled-components";
import { Transparent } from "../../style/color";

type ColorType = {
  color: string;
  sub: string;
  main: string;
}

const Rank = ({ color, sub, main }: ColorType): JSX.Element => {
  return (
    <Container color={color}>
      <Subext>{sub}</Subext>
      <h1>{main}</h1>
    </Container >
  )
}

export default Rank;

const Container = styled.div<{ color: string }> `
  width: 160px;
  border-radius: 8px;
  background: linear-gradient(0deg, ${(props) => props.color}, #F2F2F2);
  padding: 16px;
`

const Subext = styled.p`
  font-size: 20px;
  color: ${Transparent.Black50}
`