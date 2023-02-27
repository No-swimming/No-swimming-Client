import { MainInputContainer } from "./style";

type propType = {
    placeholder: string;
    value?: string;
    isPassword?: boolean;
}

function Input({placeholder, value, isPassword, }:propType){
    return(
        <div>
            <MainInputContainer >
                {placeholder}
                <input value={value} type={isPassword ? "password" : "text"} />
            </MainInputContainer>
        </div>
    )
}

export default Input;