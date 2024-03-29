import styled from "styled-components";
import { Basic, Transparent } from "../../../style/color";

export const CardBg = styled.div<{backgroud:string; text: string;}>`
    display:flex;
    gap: 12px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${props => props.backgroud};
    color: ${props => props.text};
    width: 650px;
    height: 200px;
    border: 1px ${Transparent.Black25} solid;
    & > div > div{
        display:flex;
        gap: 8px;
        align-items: center;
    }
    & > div{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    & > img{
        width: 124px;
        border-radius:4px;
    }
`;

export const BookCoverImg = styled.img`
    width: 124px;
    border-radius:4px;
`

export const CardBgMini = styled.div<{background:string}>`
    display: flex;
    align-items: center;
    border-radius: 8px;
    width: 438px;
    height: 80px;
    padding: 4px;
    gap: 8px;
    background: ${props => props.background};
    color: white;
    font-weight: 700;
    & > img{
        height: inherit;
        border-radius: 4px;
    }
`

export const CardTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    width: 484px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.trans{
        color: inherit;
        opacity: 0.5;
    }
`;

export const CardTitleMini = styled.p`
    font-weight: 700;
    font-size: 20px;
    &.trans{
        color: ${Transparent.White50};
    }
    &.lite{
        font-weight: 400;
    }
    &.desc{
        height: 12ex;
        overflow: scroll;
    }
`;

export const CardBody = styled.p`
    font-weight: 400;
    font-size: 20px;
    opacity: 0.5;
    display: -webkit-box;
    height: 50px;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const ButtonIcon = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

export const InfoTransBlack = styled.div`
    width: 100vw;
    height:100vh;
    z-index: 888;
    position: absolute;
    background-color:${Transparent.White50};
`

export const InfoCardBG = styled.div`
    z-index: 889;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: ${Basic.white};

    padding: 16px;
    box-sizing: border-box;
    border-radius: 16px;

    display: flex;
    flex-direction: column;


    & > img{
        width: 124px;
        border-radius: 4px;
    }
`

export const InfoCardInnerContainer = styled.div`
    & > span.row{
        display: flex;
        gap: 4px;
    }
    & > div{
        display: flex;
        gap: 8px;
    }
`

export const ButtonHorizionalLister = styled.div`

`