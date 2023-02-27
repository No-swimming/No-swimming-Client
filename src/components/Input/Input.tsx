import { MainInputContainer } from "./style";

type propType = {
    placeholder: string;
    value?: string;
    isPassword?: boolean;
    onChange?: any;
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