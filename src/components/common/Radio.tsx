import { SetStateAction } from "react";

interface selectorPropsType{
    title: string;
    countData: number;
    realData: number;
    state: number;
    id: string;
    setState: React.Dispatch<SetStateAction<number>>;
}

const Radio = ({title, countData, realData, state, setState, id}:selectorPropsType) => {
    function onChangeHandler(){
        setState(realData);
    }

    return(
        <label htmlFor={id}>
            <input type="radio" value={title} checked={state===realData} id={id} onChange={onChangeHandler}/>
            {title}
            <p>{state===realData ? countData : null}</p>
        </label>
    )
}

export default Radio;