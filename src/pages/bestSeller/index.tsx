import BestBook from "../../components/bestSeller/bestBook";
import * as _ from "./style";

const BestSeller = () => {
  return (
    <_.FlexBox>
      <_.Container>
        <h1>인기도서</h1>
        <BestBook/>
      </_.Container>
    </_.FlexBox>
  )
}

export default BestSeller;