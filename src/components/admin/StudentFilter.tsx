import React, { SetStateAction } from "react"

interface filterPropsType{
    setClass: React.Dispatch<SetStateAction<number>>;
    setGrade: React.Dispatch<SetStateAction<number>>;
    Class: number;
    Grade: number;
}

const StudentFilter = ({Class, Grade, setClass, setGrade}:filterPropsType) => {
    return(
        <>
            <FilterOption title='1학년' countData={63} realData={1} state={Grade} setState={setGrade} id="aaa"/>
            <FilterOption title="2학년" countData={70} realData={2} state={Grade} setState={setGrade} id="bbb"/>
            <FilterOption title="3학년" countData={74} realData={3} state={Grade} setState={setGrade} id="ccc"/>
        </>
    )
}

export default StudentFilter;

interface selectorPropsType{
    title: string;
    countData: number;
    realData: number;
    state: number;
    id: string;
    setState: React.Dispatch<SetStateAction<number>>;
}

const FilterOption = ({title, countData, realData, state, setState, id}:selectorPropsType) => {
    function onChangeHandler(){
        setState(realData);
    }

    return(
        <label htmlFor={id}>
            <input type="radio" value={title} checked={state===realData} id={id} onChange={onChangeHandler}/>
            {title}
        </label>
    )
}