import { Book24Regular, Library24Regular, NumberCircle124Regular, Person24Regular, BuildingGovernment24Regular } from "@fluentui/react-icons";
import { Outlet } from "react-router-dom";
import { Logo } from "../../../assets";
import { Button } from "../../../style/Button";
import * as _ from "./style";

const Header = (): JSX.Element => {
  /** 로그인 확인  임시코드 */
  const login = true;
  /** 선생님 확인 임시코드 => true: 선생님, false: 학생 */
  const teacher = true;

  return (
    <_.AllPage>
      <_.Container>
        <div>
          <img src={Logo} />
          <_.Menu>
            <_.MenuContent to="/">
              <Book24Regular primaryFill="black" />
              <p>인기 도서</p>
            </_.MenuContent>
            <_.MenuContent to="/">
              <Library24Regular primaryFill="black" />
              <p>책꽂이</p>
            </_.MenuContent>
            <_.MenuContent to="/">
              <NumberCircle124Regular primaryFill="black" />
              <p>학생 랭크</p>
            </_.MenuContent>
            {teacher ?
              <>
                <_.MenuContent to="/">
                  <Person24Regular primaryFill="black" />
                  <p>내 독서록</p>
                </_.MenuContent>
                <_.MenuContent to="/">
                  <BuildingGovernment24Regular primaryFill="black" />
                  <p>관리</p>
                </_.MenuContent>
              </> : <></>}
          </_.Menu>
        </div>
        <div>
          {
            login ?
              <Button Black>로그인</Button>
              :
              <>
                <_.Role>선생님</_.Role>
                <_.Name>박생선</_.Name>
                <_.ProfileImg src={Logo} />
              </>
          }
        </div>
      </_.Container>

      <_.OutLetContainer>
        <Outlet />
      </_.OutLetContainer>

    </_.AllPage >
  )
}

export default Header;