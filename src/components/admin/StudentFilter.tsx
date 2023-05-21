import React, { SetStateAction } from "react"
import Radio from "../common/Radio";

interface filterPropsType{
    setClass: React.Dispatch<SetStateAction<number>>;
    setGrade: React.Dispatch<SetStateAction<number>>;
    Class: number;
    Grade: number;
}

const StudentFilter = ({Class, Grade, setClass, setGrade}:filterPropsType) => {
    return(
        <>
            <Radio title='1학년' countData={63} realData={1} state={Grade} setState={setGrade} id="aaa"/>
            <Radio title="2학년" countData={70} realData={2} state={Grade} setState={setGrade} id="bbb"/>
            <Radio title="3학년" countData={74} realData={3} state={Grade} setState={setGrade} id="ccc"/>
        </>
    )
}

export default StudentFilter;