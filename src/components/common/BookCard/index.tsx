import { Heart24Regular } from '@fluentui/react-icons';
import { prominent } from 'color.js';
import { useState, useCallback, useEffect } from 'react';
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
    const [bgcolor,setBgcolor] = useState<string>("#000000");
    const [textColor, setTextColor] = useState<string>("#ffffff");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    useEffect(()=>{
        setTextColor(tinycolor(bgcolor).isLight() ? 'black' : 'white' );
    },[bgcolor]);

    function getprominent(){
        prominent(`${process.env.REACT_APP_MONO}${data.image}`,
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
                    <_.CardTitle>{data.title.substring(0,23)}</_.CardTitle>
                    <_.CardTitle className='trans'>{data.author} | {data.pubdate.substring(0,4)}</_.CardTitle>
                    <_.CardBody>{data.description.substring(0,65)+"..."}</_.CardBody>
                    <div>
                        <Button BlackTrans className='staticPadding'>
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
        prominent(`${process.env.REACT_APP_MONO}${data.image}`,
            {format:"hex", amount: 1}
        )
        .then(color => setBgcolor(color as string));
    };

    return(
        <_.CardBgMini background={bgcolor}>
            <img src={data.image} onLoad={getprominent} alt='책 표지'/>
            <div>
                <_.CardTitleMini>{data.title}</_.CardTitleMini>
                <_.CardTitleMini className='trans'>{data.author} | {data.pubdate.substring(0,4)}</_.CardTitleMini>
            </div>
        </_.CardBgMini>
    )
}

function CardModal({data}:cardType){
    return(
        <_.ModalMainContainer>
            <_.ModalDescContainer>
                <_.BookCoverImg src={data.image}/>

                <_.ModalInnerContainer>
                    <p>ISBM</p>
                    <div>{data.isbn}</div>
                </_.ModalInnerContainer>

                <_.ModalDescContainer>
                    <p>저자</p>
                    <div>{data.author}</div>
                </_.ModalDescContainer>

                <_.ModalInnerContainer>
                    <p>출간일</p>
                    <div>{data.pubdate}</div>
                </_.ModalInnerContainer>

                <_.ModalInnerContainer>
                    <p>설명</p>
                    <div>{data.description}</div>
                </_.ModalInnerContainer>
            </_.ModalDescContainer>
        </_.ModalMainContainer>
    )
}

export {CardLarge, CardMini};