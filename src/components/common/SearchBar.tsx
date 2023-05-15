import styled from "styled-components";
import { Gray } from "../../style/color";
import { Search32Regular } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ inputValue }: { inputValue?: string }): JSX.Element => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const EnterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      searchBook();
    }
  }
  const searchBook = () => {
    if (input === "") alert("검색어를 입력해주세요");
    else navigate(`/search/${input}/1`)
  }

  useEffect(() => {
    if (inputValue) setInput(inputValue)
  }, [])
  return (
    <Container>
      <Input placeholder="제목, 작가 검색" value={input} onChange={onChangeInput} onKeyDown={EnterEvent} />
      <Search32Regular primaryFill={Gray[25]} onClick={searchBook} />
    </Container>
  )
}

export default SearchBar;

const Container = styled.div`
  width: 800px;
  height: 69px;
  border-radius: 16px;
  border: 1px solid ${Gray[10]};
  box-shadow: 0px 0px 48px rgba(0,0,0,0.1);
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  height: 100%;
  width: calc(100% - 32px);
  font-size: 24px;
  line-height: 24px;
  outline: none;
  border: none;
  padding-right: 10px;
`