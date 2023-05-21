import { SetStateAction } from "react";
import styled from "styled-components";
import { Gray } from "../../style/color";
import { Basic } from "../../style/color";

interface selectorPropsType{
    title: string;
    countData: number;
    realData: number;
    state: number;
    id: string;
    setState: React.Dispatch<SetStateAction<number>>;
}

const Radio = ({title, countData, realData, state, setState, id}:selectorPropsType) => {
    function onChangeHandler(){
        setState(realData);
    }

    return(
        <Label htmlFor={id} className={state===realData ? 'selected' : undefined}>
            <NoAppearance type="radio" value={title} checked={state===realData} id={id} onChange={onChangeHandler}/>
            {state===realData ? title : <GraySpan>{title}</GraySpan>}
            
            {state===realData ? <GraySpan>{countData}</GraySpan> : null}
        </Label>
    )
}

export default Radio;

const NoAppearance = styled.input`
    appearance: none;
    display: none;
`

const Label = styled.label`
    font-weight: 700;
    font-size: 20px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 6px 12px;
    gap: 8px;
    border-radius: 9888px;

    background: ${Gray.Elevated0};

    &.selected{
        outline: 2px solid ${Basic.black0};
    }
`

const GraySpan = styled.span`
    font-weight: 400;
    color: ${Gray[50]};
`