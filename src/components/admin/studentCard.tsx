type studentPropsType = {
    data: string;
}

const StudentCard = ({data}:studentPropsType) => {
    return(
        <div>
            <img src="https://i.guim.co.uk/img/media/e3d9827f235ac40064f15d7df25024aec60500cb/0_134_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=56f9da8e992f2558c4709614daf82a69" />
            <p>최양성명</p>
            <p>8학년 8반 88번</p>
        </div>
    )
}

export default StudentCard;