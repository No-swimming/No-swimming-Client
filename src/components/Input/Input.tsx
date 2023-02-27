import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";
import { useState } from "react";
import { MainInputContainer } from "./style";

type propType = {
    placeholder: string;
    value?: string;
    isPassword?: boolean;
    onChange?: ()=>void;
}

type passwordEyeType = {
    click: ()=>void;
    eyeOn?: boolean;
}

function Input({placeholder, value, isPassword, onChange}:propType){
    const [isVisable, setVisable] = useState(false);
    function pwdVisableSwitch(){
        setVisable(!isVisable);
    }

    return(
            <MainInputContainer >
                {placeholder}
                <div>
                    <input value={value} type={isPassword && isVisable===false ? "password" : "text"} onChange={onChange} />
                    {isPassword ? <PasswordEye click={pwdVisableSwitch} eyeOn={isVisable}/> : null}
                </div>
            </MainInputContainer>
    )
}

function PasswordEye({eyeOn, click}:passwordEyeType){
    return(
        <>
            <button onClick={click}>
                {eyeOn ? <EyeOff24Regular /> : <Eye24Regular />}
            </button>
        </>
    )
}

export default Input;