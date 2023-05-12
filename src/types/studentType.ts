declare interface studentType {
        grade: number;
        class_num: number;
        number: number;
        name: string;
}

declare interface studentPropsType{
    data: studentType;
}

declare interface studentArrayType{
    student_list: studentType[];
}