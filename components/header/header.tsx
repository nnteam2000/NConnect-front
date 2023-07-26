import { FC } from "react";
import { InputElement } from "@/components/shared";
import { IconElement } from "@/components/shared/IconElement";
import { GrNotification } from 'react-icons/gr';
import { ProfileElement } from "@/components/shared/profileElement";
import userIcon from '../../public/images/userIcon.png';

const Header: FC = () => {

    return (
        <div className="flex items-center justify-between bg-white h-[90px] px-[20px] py-[15px] ml-[290px] ">

            <div>
                <InputElement
                    inputType="text"
                    placeholder="Search here"
                />
            </div>

            <div className="flex items-center">
                <div className="mr-[20px]">
                    <IconElement
                        Icon={GrNotification}
                        count={0}
                    />
                </div>

                <div>
                    <ProfileElement
                        name="Hello! Alex Grifline"
                        Icon={userIcon}
                    />
                </div>
            </div>

        </div>
    )
};

export default Header;