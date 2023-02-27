import { MainInputContainer } from "./style";

type propType = {
    placeholder: string;
    value?: string;
    isPassword?: boolean;
    onChange?: ()=>void;
}

function Input({placeholder, value, isPassword, onChange}:propType){

    return(
            <MainInputContainer >
                {placeholder}
                <input value={value} type={isPassword ? "password" : "text"} onChange={onChange} />
            </MainInputContainer>
    )
}

export default Input;