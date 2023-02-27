import { Logo } from "../../assets";
import Background from "../../components/common/Background";
import SearchBar from "../../components/common/searchBar";
import BestBook from "../../components/pages/main/bestBook";
import * as _ from "./style";

const MainPage = (): JSX.Element => {
  return (
    <Background display="flex" alginItems="center" flexDirection="column">
      <_.Logo src={Logo} />
      <_.Search>
        <SearchBar />
        <BestBook />
      </_.Search>
    </Background >
  )
}

export default MainPage;