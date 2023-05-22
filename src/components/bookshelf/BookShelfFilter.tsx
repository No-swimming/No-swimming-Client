import React, { SetStateAction } from "react";
import Radio from "../common/Radio"

type BookShelfFilterProps = {
    value: any;
    setValue: React.Dispatch<SetStateAction<boolean>>
}

const BookShelfFilter = ({value, setValue}: BookShelfFilterProps) => {
    return(
        <div>
            <Radio id="heart" realData={true} state={value} setState={setValue} countData={12} countPostfix="권" title="♥ 누른 책" />
            <Radio id="readen" realData={false} state={value} setState={setValue} countData={12} countPostfix="권" title="읽음 표시한 책"/>
        </div>
    )
}

export default BookShelfFilter;