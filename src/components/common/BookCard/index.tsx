import { Heart24Filled, Heart24Regular } from '@fluentui/react-icons';
import axios from 'axios';
import { average } from 'color.js';
import { useState } from 'react';
import * as _ from './style';

type cardType = {
    hearted?: boolean;
    data: bookData;
}

type bookData = {
    title: string;
    image: string;
    link: string;
    author: string;
    pubdate: string;
    isbn: string;
    description: string;
}

type cardHeartType = {
    onClick: any;
    hearted?: boolean;
}

function CardHeart({onClick, hearted}:cardHeartType){
    return(
        <_.ButtonIcon onClick={onClick}>
            {hearted ? <Heart24Filled primaryFill="#ff0000" /> : <Heart24Regular primaryFill="#ffffff" />}
        </_.ButtonIcon>
    );
};

function CardLarge({hearted, data}:cardType){
    const [bgcolor,setBgcolor] = useState("#000000");

    function getAverage(){
        average(`http://monotype.iptime.org:10888/${data.image}`,
            {format:"hex"}
        )
        .then(color => setBgcolor(color as string));
    };

    return(
        <_.CardBg backgroud={bgcolor}>
            <img src={data.image} onLoad={getAverage} />
            <div>
                <_.CardTitle>{data.title}</_.CardTitle>
                <_.CardTitle className='trans'>{data.author} | {data.pubdate.substr(0,4)}</_.CardTitle>
                <_.CardBody>{data.description.substr(0,65)+"..."}</_.CardBody>
                <div>
                    <_.ButtonBlack className='icon'>
                        <CardHeart onClick="afsd" hearted={hearted}/>
                    </_.ButtonBlack>
                    <_.ButtonBlack>
                        읽은 책에 추가
                    </_.ButtonBlack>
                    <_.ButtonBlack>
                        독서록 작성
                    </_.ButtonBlack>
                </div>
            </div>
        </_.CardBg>
    )
}

function CardMini({data}:cardType){
    const [bgcolor,setBgcolor] = useState("#000000");

    function getAverage(){
        average(`http://monotype.iptime.org:10888/${data.image}`,
            {format:"hex"}
        )
        .then(color => setBgcolor(color as string));
    };

    return(
        <_.CardBgMini background={bgcolor}>
            <img src={data.image} onLoad={getAverage} />
            <div>
                <_.CardTitleMini>{data.title}</_.CardTitleMini>
                <_.CardTitleMini className='trans'>{data.author} | {data.pubdate.substring(0,4)}</_.CardTitleMini>
            </div>
        </_.CardBgMini>
    )
}

function BookInfoModal({hearted, data}:cardType){
    function closeModal(){
        console.log("modalclosed");
    }

    return(
        <_.InfoTransBlack onClick={closeModal}>
            <_.InfoCardBG>
                <img src={data.image}/>
                <_.InfoCardInnerContainer>
                    <_.CardTitle>{data.title}</_.CardTitle>
                    <_.CardTitleMini className='trans'>{data.author} | {data.pubdate.substr(0,4)}</_.CardTitleMini>
                    <span className='row'>
                        <_.CardTitleMini className='trans'>ISBN</_.CardTitleMini>
                        <_.CardTitleMini className='trans lite'>{data.isbn}</_.CardTitleMini>
                    </span>
                    <span>
                        <_.CardTitleMini className='trans'>설명</_.CardTitleMini>
                        <_.CardTitleMini className='trans lite'>{data.description}</_.CardTitleMini>
                    </span>
                    <div>
                        <_.ButtonBlack>(하트)</_.ButtonBlack>
                        <_.ButtonBlack>읽음으로 표시</_.ButtonBlack>
                        <_.ButtonBlack>독서록 작성</_.ButtonBlack>
                        <_.ButtonBlack>네이버 도서에서 보기</_.ButtonBlack>
                    </div>
                </_.InfoCardInnerContainer>
            </_.InfoCardBG>
        </_.InfoTransBlack>
    )
}

export {CardLarge, CardMini, BookInfoModal};