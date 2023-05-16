import { TriangleLeft16Filled, TriangleRight16Filled } from "@fluentui/react-icons";
import styled from "styled-components";
import { Gray } from "../../style/color";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


type Props = {
  start: number;
  book: string;
  total: number;
}
const Pagination = ({ start, book, total }: Props) => {
  const navigate = useNavigate();

  const [pages, setPages] = useState<number[]>([]);
  const [showPage, setShowPage] = useState<number>(1);

  useEffect(() => {
    const pageNum = Math.ceil(total / 8);
    setPages(Array.from({ length: Math.min(10, pageNum - (showPage - 1) * 10) }, (_, index) => index + 10 * showPage - 9))
  }, [showPage, total])


  return (
    <Container>
      {
        showPage !== 1 && <ArrowBtn onClick={() => { setShowPage(showPage - 1) }}>
          <TriangleLeft16Filled primaryFill="#ffffff" />
        </ArrowBtn>
      }
      {
        pages.map((n) => {
          return <NumberBtn select={n == start} onClick={() => navigate(`/search/${book}/${n}`)}>{n}</NumberBtn>
        })
      }
      {
        showPage !== (Math.ceil(total / 80)) && <ArrowBtn onClick={() => { setShowPage(showPage + 1) }}>
          <TriangleRight16Filled primaryFill="#ffffff" />
        </ArrowBtn>
      }
    </Container>
  )
}

export default Pagination;

const Container = styled.div`
  width: 1300px;
  display: flex;
  gap: 16px;
`;

const OpContainer = styled.div`
  width: 36px;
`

const Btn = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const ArrowBtn = styled(Btn)`
  background-color: ${Gray[50]};
  
`
const NumberBtn = styled(Btn) <{ select: Boolean }>`
  background-color: ${Gray.Elevated0};
  border: ${props => props.select ? "2px solid black" : ""};
  font-weight: ${props => props.select ? "bold" : ""};
  font-size: 20px;
`