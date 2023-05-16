import { SetStateAction } from "react"

interface filterPropsType{
    setClass: React.Dispatch<SetStateAction<number>>;
    setGrade: React.Dispatch<SetStateAction<number>>;
    Class: number;
    Grade: number;
}

const StudentFilter = ({Class, Grade, setClass, setGrade}:filterPropsType) => {
    return(
        <>
            <FilterOption title='1학년' countData={123} />
            <FilterOption selected title="abc" countData={213} />
        </>
    )
}

export default StudentFilter;

interface selectorPropsType{
    selected?: boolean;
    title: string;
    countData: number;
}

const FilterOption = ({selected, title, countData}:selectorPropsType) => {
    if(selected){
        return(
            <button>
                {title}
                {countData+'명'}
            </button>
        )
    }
    else{
        return(
            <button>
                {title}
            </button>
        )
    }
}