import { Heart24Filled, Heart24Regular } from '@fluentui/react-icons';
import axios from 'axios';
import { prominent } from 'color.js';
import { useState, useCallback } from 'react';
import * as _ from './style';
import { Button } from '../../../style/Button';
import Modal from '../modal';
import tinycolor from "tinycolor2";

type cardType = {
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

function CardLarge({data}:cardType){
    const [bgcolor,setBgcolor] = useState("#000000");
    const [textColor, setTextColor] = useState(tinycolor(bgcolor).isLight() ? 'white' : 'black' );
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    function getprominent(){
        prominent(`http://monotype.iptime.org:10888/${data.image}`,
            {format:"hex", amount:1}
        )
        .then(color => setBgcolor(color as string));
    };
    return(
        <>
            {isOpenModal &&
                <Modal onClickToggleModal={onClickToggleModal}>
                    <CardModal data={data} />
                </Modal>
            }
            <_.CardBg backgroud={bgcolor} text={textColor}>
                <img src={data.image} onLoad={getprominent} onClick={()=>setIsOpenModal(!isOpenModal)} alt='책 표지' />
                <div>
                    <_.CardTitle>{data.title}</_.CardTitle>
                    <_.CardTitle className='trans'>{data.author} | {data.pubdate.substring(0,4)}</_.CardTitle>
                    <_.CardBody>{data.description.substring(0,70)+"..."}</_.CardBody>
                    <div>
                        <Button BlackTrans className='icon'>
                            <Heart24Regular primaryFill="#ffffff" />
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
        </>
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

function CardModal({data}:cardType){
    return(
        <_.BookCoverImg src={data.image}/>
    )
}

export {CardLarge, CardMini};