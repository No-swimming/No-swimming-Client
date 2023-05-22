import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";
import { useState } from "react";
import * as s from "./style";
import { Gray } from "../../../style/color";

type propType = {
    placeholder: string;
    value?: string;
    isPassword?: boolean;
    onChange?: (e: any) => void;
    id: string;
    number?: boolean;
    max?: number;
    min?: number;
}

type passwordEyeType = {
    click: () => void;
    eyeOn?: boolean;
}

function Input({ placeholder, value, isPassword, onChange, id, number, max, min }: propType) {
    const [isVisable, setVisable] = useState(false);
    function pwdVisableSwitch() {
        setVisable(!isVisable);
    }

    return (
        <div>
            <s.MainInputContainer htmlFor={id}>{placeholder}</s.MainInputContainer>
            <s.InputBox>
                <input id={id} value={value} type={isPassword && isVisable === false ? "password" : number ? "number" : "text"} max={max ? max : ""} min={min ? min : ""} onChange={onChange} />
                {isPassword ? <PasswordEye click={pwdVisableSwitch} eyeOn={isVisable} /> : null}
            </s.InputBox>
        </div>
    )
}

function PasswordEye({ eyeOn, click }: passwordEyeType) {
    return (
        <button onClick={click}>
            {eyeOn ? <EyeOff24Regular color={Gray[50]} /> : <Eye24Regular color={Gray[50]} />}
        </button>
    )
}

export default Input;