import * as _ from "./style";

const NotFound = (): JSX.Element => {
  return (
    <_.Container>
      <h1>DON’T PANIC!</h1>
      <_.Error404>404 Not Found</_.Error404>
      <_.ErrorExplain>
        페이지를 찾을 수 없습니다.<br />
        접속하려는 페이지를 사용할 수 없거나,<br />
        주소가 잘못되었을 수 있습니다.
      </_.ErrorExplain>
    </_.Container>
  )
}

export default NotFound