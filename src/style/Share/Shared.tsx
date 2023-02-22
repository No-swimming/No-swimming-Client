import styled from "styled-components";
import { Gray, Basic, Transparent } from "./color";

export const ButtonBlack = styled.button`
    color: ${Basic.white};
    background-color: ${Basic.black0};
    border: none;
    cursor: pointer;

    font-size: 20px;

    border-radius: 888px;
    padding: 8px 16px;

    &:hover{
        background-color: hsl(0, 0%, 10%);
        transition: 100ms;   
    }
    &:active{
        filter: brightness(75%);
        transition: 100ms;
    }
`

export const ButtonBlackTrans = styled.button`
    color: ${Basic.white};
    background-color: ${Transparent.Black50};
    border: none;
    cursor: pointer;

    font-size: 20px;

    border-radius: 888px;
    padding: 8px 16px;

    &:hover{
        background-color: hsla(0, 0%, 0%, 0.6);
        transition: 100ms;   
    }
    &:active{
        filter: brightness(75%);
        transition: 100ms;
    }
`

export const ButtonLight = styled.button`
    color: ${Basic.black0};
    background-color: ${Gray.Elevated0};
    border: none;
    cursor: pointer;

    font-size: 20px;

    border-radius: 888px;
    padding: 8px 16px;

    &:hover{
        background-color: hsla(0, 0%, 85%, 1);
        transition: 100ms;   
    }
    &:active{
        filter: brightness(75%);
        transition: 100ms;
    }
`