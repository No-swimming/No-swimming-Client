import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";
import { useState } from "react";
import * as s from "./style";

type propType = {
    placeholder: string;
    value?: string;
    isPassword?: boolean;
    onChange?: ()=>void;
    id: string;
}

type passwordEyeType = {
    click: ()=>void;
    eyeOn?: boolean;
}

function Input({placeholder, value, isPassword, onChange, id}:propType){
    const [isVisable, setVisable] = useState(false);
    function pwdVisableSwitch(){
        setVisable(!isVisable);
    }

    return(
        <div>
            <s.MainInputContainer htmlFor={id}>{placeholder}</s.MainInputContainer>
            <s.InputBox>
                    <input id={id} value={value} type={isPassword && isVisable===false ? "password" : "text"} onChange={onChange} />
                    {isPassword ? <PasswordEye click={pwdVisableSwitch} eyeOn={isVisable}/> : null}
            </s.InputBox>
        </div>
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