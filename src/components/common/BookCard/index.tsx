import { Heart24Filled, Heart24Regular } from '@fluentui/react-icons';
import axios from 'axios';
import { prominent } from 'color.js';
import { useState } from 'react';
import * as _ from './style';
import { Button } from '../../../style/Button';

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

    function getprominent(){
        prominent(`http://monotype.iptime.org:10888/${data.image}`,
            {format:"hex", amount:1}
        )
        .then(color => setBgcolor(color as string));
    };

    return(
        <_.CardBg backgroud={bgcolor}>
            <img src={data.image} onLoad={getprominent} />
            <div>
                <_.CardTitle>{data.title.substring(0,28)}</_.CardTitle>
                <_.CardTitle className='trans'>{data.author} | {data.pubdate.substring(0,4)}</_.CardTitle>
                <_.CardBody>{data.description.substring(0,70)+"..."}</_.CardBody>
                <div>
                    <Button BlackTrans className='icon'>
                        <CardHeart onClick="afsd" hearted={hearted}/>
                    </Button>
                    <Button BlackTrans>
                        읽은 책에 추가
                    </Button>
                    <Button BlackTrans>
                        독서록 작성
                    </Button>
                </div>
            </div>
        </_.CardBg>
    )
}

function CardMini({data}:cardType){
    const [bgcolor,setBgcolor] = useState("#000000");

    function getprominent(){
        prominent(`http://monotype.iptime.org:10888/${data.image}`,
            {format:"hex"}
        )
        .then(color => setBgcolor(color as string));
    };

    return(
        <_.CardBgMini background={bgcolor}>
            <img src={data.image} onLoad={getprominent} />
            <div>
                <_.CardTitleMini>{data.title}</_.CardTitleMini>
                <_.CardTitleMini className='trans'>{data.author} | {data.pubdate.substring(0,4)}</_.CardTitleMini>
            </div>
        </_.CardBgMini>
    )
}

export {CardLarge, CardMini};