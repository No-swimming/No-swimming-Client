import { useEffect, useState } from "react";
import StudentCardLister from "../../components/admin/StudentCardLister";
import axios from "axios";

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
        <>
            <StudentCardLister student_list={Data.student_list}/>
        </>
    )
}

export default Admin;