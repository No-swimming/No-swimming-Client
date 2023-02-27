import { MainInputContainer } from "./style";

type propType = {
    placeholder: string;
    value?: string;
    isPassword?: boolean;
}

function Input({placeholder, value, isPassword, }:propType){
    return(
            <MainInputContainer >
                {placeholder}
                <input value={value} type={isPassword ? "password" : "text"} />
            </MainInputContainer>
    )
}

export default Input;