import { Book24Regular, Library24Regular, NumberCircle124Regular, Person24Regular, BuildingGovernment24Regular } from "@fluentui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../../../assets";
import { Button } from "../../../style/Button";
import * as _ from "./style";
const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

type userType = {
  class_num: number,
  count_read_book: number,
  count_reject_book: number,
  email: string,
  grade: number,
  my_rank: number,
  name: string,
  number: number,
  profile_num: number
};

const Header = (): JSX.Element => {
  //const token = false;
  /** 선생님 확인 임시코드 => true: 선생님, false: 학생 */
  const teacher = false;
  const [token, setToken] = useState("");

  const [userData, setUserData] = useState<userType>();

  useEffect(() => {
    setToken(localStorage.getItem("access_token") || "");
  }, [])



  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: `${mono}${server}/student`,
    //   headers: {
    //     "Authorization": `Bearer ${token}`
    //   }
    // })
    //   .then(function (res) {
    //     setUserData(res.data)
    //   })
    //   .catch(function (error) {
    //     console.log("학생 정보", error)
    //   });
  }, [token])

  return (
    <_.AllPage>
      <_.Container>
        <div>
          <_.MenuContent to="/">
            <_.Logo src={Logo} />
          </_.MenuContent>
          <_.Menu>
            <_.MenuContent to="/best">
              <Book24Regular primaryFill="black" />
              <p>인기 도서</p>
            </_.MenuContent>
            <_.MenuContent to="/">
              <Library24Regular primaryFill="black" />
              <p>책꽂이</p>
            </_.MenuContent>
            <_.MenuContent to="/studentrank">
              <NumberCircle124Regular primaryFill="black" />
              <p>학생 랭크</p>
            </_.MenuContent>
            {
              token &&
              <_.MenuContent to="/">
                <Person24Regular primaryFill="black" />
                <p>내 독서록</p>
              </_.MenuContent>
            }
            {teacher ?
              <>
                <_.MenuContent to="/">
                  <BuildingGovernment24Regular primaryFill="black" />
                  <p>관리</p>
                </_.MenuContent>
              </> : <></>}
          </_.Menu>
        </div>
        <div>
          {
            token ?
              <>
                <_.Role>학생</_.Role>
                <_.Name>{userData?.name}</_.Name>
                <_.ProfileImg src={Logo} />
              </> :
              <Button Black>로그인</Button>
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