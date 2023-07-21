import { FC } from "react";
import { buttonProps } from "./types";

const MainButton: FC<buttonProps> = ({ buttonTitle }) => {
    return (
        <button
            className="
                bg-sky-650 text-white py-[8px] px-[30px] rounded-[30px] mt-[23px]">
            {buttonTitle}
        </button>
    )
};

export default MainButton;
