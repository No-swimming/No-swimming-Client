import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { Gray, Transparent } from "../../style/color";
type valueType = {
  teacher_id: number;
  title: string;
  content: string;
};
type props = {
  value: valueType;
  setValue: Dispatch<SetStateAction<valueType>>;
  handleInputChange: (props: string) => (event: any) => void;
};

const BookWrite = ({ value, handleInputChange, setValue }: props): JSX.Element => {
  const [copyCount, setCopyCount] = useState<number>(4);
  const [count, setCount] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      if (value.content.length - count.length > 3) {
        if (copyCount) { alert(`붙여넣기를 할 수 없습니다. \n ${copyCount}번 더 시도하시면 모든 내용이 삭제됩니다.`) }
        else { alert(`붙여넣기를 할 수 없습니다. \n 분명 다 삭제한다고 말했는데 🤭`) }
        setValue({ ...value, ["content"]: count })
        setCopyCount(copyCount - 1);
        if (copyCount === 0) {
          setCount("");
          setValue({ ...value, ["content"]: "" });
          setCopyCount(4);
        }
      }
      setCount(value.content);
    }, 0)
  }, [value.content.length]);

  return (
    <Container>
      <Label>제목</Label>
      <InputTitle value={value.title} onChange={handleInputChange("title")} />
      <Label>내용</Label>
      <InputContent
        onPaste={() => {
          // alert("붙여넣기를 할 수 없습니다.");
          setTimeout(() => {
            setValue({ ...value, ["content"]: count });
          }, 0)
        }}
        onDrop={() => {
          // alert("붙여넣기를 할 수 없습니다.");
          setTimeout(() => {
            setValue({ ...value, ["content"]: count });
          }, 0)
        }}
        value={value.content}
        onChange={handleInputChange("content")}
      />
      <Count>
        <p>{value.content.split(/\s+/).length - 1}단어 {value.content.length}글자</p>
        <p>공백제외 {value.content.replace(/\s/gi, "").length}글자</p>
      </Count>
    </Container>
  )
}

export default BookWrite;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.p`
  font-size: 16px;
  color: ${Transparent.Black50};
  margin-top: 12px;
  margin-bottom: 4px;
`

const InputTitle = styled.input`
  height: 50px;
  border-radius: 8px;
  border: 1px solid ${Gray[50]};
  padding: 12px;
  font-size: 16px;
  outline: none;
  `

const InputContent = styled.textarea`
  height: 414px;
  border-radius: 8px;
  border: 1px solid ${Gray[50]};
  padding: 12px;
  font-size: 16px;
  outline: none;
  resize: none;
`

const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  > p:first-child{
    font-size: 24px;
    font-weight: bold;
  }
  > p:last-child{
    font-size: 20px;
    color: ${Transparent.Black50};
  }
  `