import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../components/common/Background";
import Input from "../../components/common/Input/Input";
import { Button } from "../../style/Button";
import * as _ from "./style";
const mono = process.env.REACT_APP_MONO;
const server = process.env.REACT_APP_SERVER;

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState<string>("");
  const onChangeUserId = (e: any) => {
    setUserId(e.target.value)
  }
  const loginAxios = () => {
    axios({
      method: 'post',
      url: `${mono}${server}/student/token`,
      data: {
        email: userId
      }
    })
      .then(function (res) {
        localStorage.setItem("access_token", res.data.access_token);
        navigate('/')
      })
      .catch(function (error) {
        console.error(error)
      });
  }

  return (
    <Background display="flex" alginItems="center" justifyContent="center" flexDirection="column">
      <_.LoginContainer>
        <_.Title>로그인</_.Title>
        <Input placeholder="이메일" id="이메일" width="331px" value={userId} onChange={e => onChangeUserId(e)} />
        {/* <Input placeholder="비밀번호" id="비밀번호" width="331px" isPassword /> */}
        <p>계정을 발급받으려면 관리자에게 문의하십시오</p>
        <Button Black onClick={loginAxios}>로그인</Button>
      </_.LoginContainer>
    </Background>
  )
}

export default Login;