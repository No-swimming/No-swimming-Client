import styled from "styled-components";

export const ButtonBlack = styled.button`
    color: white;
    background-color: black;
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