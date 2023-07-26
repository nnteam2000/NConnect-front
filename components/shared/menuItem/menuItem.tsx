import { FC, ReactElement } from "react";
import menuItemsProps from "@/components/shared/menuItem/types";
import Link from "next/link";

const MenuItem: FC<menuItemsProps> = ({ Icon, title, isActive, to }): ReactElement => {
    return (
        <Link href={to} className="flex w-100 p-[20px] cursor-pointer hover:bg-main-600 ease-in  duration-300">
            <div className="mr-[30px]">
                <Icon style={{ color: '#7A7A7A' }} className="w-[24px] h-[24px] " />
            </div>
            <div className="text-main-500 font-normal text-[18px] not-italic">
                {title}
            </div>
        </Link>
    )

};

export default MenuItem;