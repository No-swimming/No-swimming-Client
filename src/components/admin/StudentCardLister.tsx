import styled from "styled-components";
import StudentCard from "./studentCard"

const StudentCardLister = ({student_list}:studentArrayType) => {
    return(
        <HorizonalStyle>
            {student_list.map((data) => {
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