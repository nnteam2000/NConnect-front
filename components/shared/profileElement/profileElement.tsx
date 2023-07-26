import { FC } from "react";
import ProfileElementProps from "@/components/shared/profileElement/types";
import Image from "next/image";

const ProfileElement: FC<ProfileElementProps> = ({
    Icon,
    name
}) => {
    return (
        <div className="bg-main-900 p-[11px] rounded-[8px] w-[214px] flex items-center justify-between cursor-pointer">
            <div className="text-[12px] font-normal text-white">
                {name}
            </div>
            <div className="overflow-hidden rounded-full">
                <Image src={Icon}
                    alt="user icon"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    )
};

export default ProfileElement;