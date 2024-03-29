import { Heart24Regular } from '@fluentui/react-icons';
import { prominent } from 'color.js';
import { useState, useCallback, useEffect } from 'react';
import * as _ from './style';
import { Button } from '../../../style/Button';
import Modal from '../modal';
import tinycolor from "tinycolor2";
import { useNavigate } from 'react-router-dom';

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

function CardLarge({ data }: cardType) {
    const [bgcolor, setBgcolor] = useState<string>("#000000");
    const [textColor, setTextColor] = useState<string>("#ffffff");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const navigate = useNavigate();

    useEffect(() => {
        setTextColor(tinycolor(bgcolor).isLight() ? 'black' : 'white');
    }, [bgcolor]);

    function getprominent() {
        prominent(`${process.env.REACT_APP_MONO}${data.image}`,
            { format: "hex", amount: 1 }
        )
            .then(color => setBgcolor(color as string));
    };
    return (
        <>
            {isOpenModal &&
                <Modal onClickToggleModal={onClickToggleModal}>
                    <CardModal data={data} />
                </Modal>
            }
            <_.CardBg backgroud={bgcolor} text={textColor}>
                <img src={data.image} onLoad={getprominent} onClick={() => setIsOpenModal(!isOpenModal)} alt='책 표지' />
                <div>
                    <_.CardTitle>{data.title}</_.CardTitle>
                    <_.CardTitle className='trans'>{data.author} | {data.pubdate.substring(0, 4)}</_.CardTitle>
                    <_.CardBody>{data.description}</_.CardBody>
                    <div>
                        <Button BlackTrans className='icon'>
                            <Heart24Regular primaryFill="#ffffff" />
                        </Button>
                        <Button BlackTrans>
                            읽은 책에 추가
                        </Button>
                        <Button BlackTrans onClick={() => navigate(`/write/${data.isbn}`)}>
                            독서록 작성
                        </Button>
                    </div>
                </div>
            </_.CardBg>
        </>
    )
}

function CardMini({ data }: cardType) {
    const [bgcolor, setBgcolor] = useState("#000000");

    function getprominent() {
        prominent(`http://monotype.iptime.org:10888/${data.image}`,
            { format: "hex" }
        )
            .then(color => setBgcolor(color as string));
    };

    return (
        <_.CardBgMini background={bgcolor}>
            <img src={data.image} onLoad={getprominent} />
            <div>
                <_.CardTitleMini>{data.title}</_.CardTitleMini>
                <_.CardTitleMini className='trans'>{data.author} | {data.pubdate.substring(0, 4)}</_.CardTitleMini>
            </div>
        </_.CardBgMini>
    )
}

function CardModal({ data }: cardType) {
    return (
        <_.BookCoverImg src={data.image} />
    )
}

export { CardLarge, CardMini };