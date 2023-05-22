import React, { SetStateAction } from "react";
import Radio from "../common/Radio"
import styled from "styled-components";

type BookShelfFilterProps = {
    value: any;
    setValue: React.Dispatch<SetStateAction<boolean>>
}

const BookShelfFilter = ({value, setValue}: BookShelfFilterProps) => {
    return(
        <Horizonal>
            <Radio id="heart" realData={true} state={value} setState={setValue} countData={12} countPostfix="권" title="♥ 누른 책" />
            <Radio id="readen" realData={false} state={value} setState={setValue} countData={12} countPostfix="권" title="읽음 표시한 책"/>
        </Horizonal>
    )
}

export default BookShelfFilter;

const Horizonal = styled.div`
    display: flex;
    gap: 12px;
`