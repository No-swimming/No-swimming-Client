import { useEffect, useState } from "react";
import StudentCardLister from "../../components/admin/StudentCardLister";
import axios from "axios";
import styled from "styled-components";

const Admin = ():JSX.Element => {
    const [Data,setData] = useState<studentArrayType>(
        {
            student_list:[]
        }
    );
    const [GradeFilter,setGradeFilter] = useState<number>(0);
    const [ClassFilter, setClassFilter] = useState<number>(0);

    useEffect(()=>{
        axios({
            method: 'GET',
            url:`${process.env.REACT_APP_MONO}${process.env.REACT_APP_BASEURL}student/list`,
            params:{
                grade: GradeFilter===0 ? null : GradeFilter,
                classNum: ClassFilter===0 ? null : ClassFilter 
            }
        })
        .then((res)=>{
            setData(res.data as studentArrayType);
            console.log(res)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[ClassFilter, GradeFilter]);

    return(
        <CenterProvider>
            <WidthProvider>
                <p>학생 관리</p>
                <StudentCardLister student_list={Data.student_list}/>
            </WidthProvider>
        </CenterProvider>
    )
}

export default Admin;

const WidthProvider = styled.div`
    width: 1320px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const CenterProvider = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
`