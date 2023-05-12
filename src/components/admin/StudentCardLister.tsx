import styled from "styled-components";
import StudentCard from "./studentCard"

const StudentCardLister = () => {
    return(
        <HorizonalStyle>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
            <StudentCard data="1"/>
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