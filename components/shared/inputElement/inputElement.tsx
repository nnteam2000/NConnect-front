import { FC } from "react";

// Types
import inputProps from "./types";

const InputElement: FC<inputProps> = ({ InputIcon, placeholder, inputType }) => {
    return (
        <div className="flex items-center px-[26px] py-[18px] rounded-[30px] border border-zinc-100 ">

            <div className="w-[24px] h-[24px] opacity-30 mr-[8px]">
                <InputIcon className="w-[100%] h-[100%]" />
            </div>

            <div>
                <input className="outline-none" type={inputType} placeholder={placeholder} />
            </div>

        </div>
    )
};

export default InputElement;