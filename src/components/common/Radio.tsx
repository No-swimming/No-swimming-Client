import { SetStateAction } from "react";
import styled from "styled-components";
import { Gray } from "../../style/color";
import { Basic } from "../../style/color";

interface selectorPropsType{
    title: string;
    countData: number;
    realData: number | string | boolean;
    state: number | string | boolean;
    id: string;
    setState: React.Dispatch<SetStateAction<any>>;
    countPostfix?: string;
}

const Radio = ({title, countData, realData, state, setState, id, countPostfix}:selectorPropsType) => {
    function onChangeHandler(){
        setState(realData);
    }

    return(
        <Label htmlFor={id} className={state===realData ? 'selected' : undefined}>
            <NoAppearance type="radio" value={title} checked={state===realData} id={id} onChange={onChangeHandler}/>
            {state===realData ? title : <GraySpan>{title}</GraySpan>}
            
            {state===realData ? <GraySpan>{countData}{countPostfix}</GraySpan> : null}
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
        box-shadow: 0 0 0 2px ${Basic.black0} inset;
    }
`

const GraySpan = styled.span`
    font-weight: 400;
    color: ${Gray[50]};
`