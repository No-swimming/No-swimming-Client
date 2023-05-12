import styled from "styled-components";
import StudentCard from "./studentCard"
import { useState } from "react";

const StudentCardLister = () => {
    const [Data, setData] = useState<studentArrayType>({
        "student_list":[]
    })

    return(
        <HorizonalStyle>
            {Data.student_list.map((data) => {
                return <StudentCard data={data} />;
            })}
        </HorizonalStyle>
    )
}

export default StudentCardLister;

const HorizonalStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px
`