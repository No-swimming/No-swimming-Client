import styled, { css } from "styled-components";
import { Gray, Basic, Transparent } from "./color";

type ButtonColorType = {
    Black? : boolean;
    BlackTrans? : boolean;
    Light? : boolean;
}

export const Button = styled.button`
    border: none;
    cursor: pointer;

    font-size: 18px;

    border-radius: 888px;
    padding: 8px 16px;
    
    ${(props:ButtonColorType) => 
        props.Black ? 
        css`
            color: ${Basic.white};
            background-color: ${Basic.black0};

            &:hover{
                filter: brightness(150%);
                transition: 100ms;   
            }
            &:active{
                filter: brightness(75%);
                transition: 100ms;
            }
        `
        : props.BlackTrans ?
        css`
            color: ${Basic.white};
            background-color: ${Transparent.Black50};

            &:hover{
                filter: brightness(150%);
                transition: 100ms;   
            }
            &:active{
                filter: brightness(75%);
                transition: 100ms;
            }
        `
        : props.Light ?
        css`
            color: ${Basic.black0};
            background-color: ${Gray.Elevated0};

            &:hover{
                filter: brightness(90%);
                transition: 100ms;   
            }
            &:active{
                filter: brightness(75%);
                transition: 100ms;
            }
        `
        :css`
            color: ${Basic.white};
            background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red);;
        `
    }

    &.staticPadding{
        padding: 8px;
        height: 40px;
    }
`