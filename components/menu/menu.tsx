import { FC } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from "@/components/shared/menuItem/menuItem";

import { AiOutlineHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { LuMessageSquare } from 'react-icons/lu';
import { FiLogOut } from 'react-icons/fi';

import { Risque } from "next/font/google";


const Menu: FC = () => {

    const menuList: {
        title: string;
        icon: any;
        to: string;
    }[] = [
            {
                title: 'Feed',
                icon: AiOutlineHome,
                to: 'feed'
            },
            {
                title: 'Friends',
                icon: FaUserFriends,
                to: 'friends'
            },
            {
                title: 'Messages',
                icon: LuMessageSquare,
                to: 'chat'
            },
        ];


    return (
        <div className="bg-white h-full w-[260px] py-[30px] fixed flex flex-col ease-in duration-1000">

            <div className="mb-[77px] px-[30px] flex items-center justify-between ">

                <p className={`text-main-100 text-xl font-normal text-[20px]`}>
                    NConnectNET
                </p>

                <AiOutlineMenu size="1em" className="cursor-pointer" />

            </div>

            <div className="flex flex-col h-full justify-between">

                <div>
                    {
                        menuList.map(item => {
                            return <MenuItem
                                key={item.title}
                                title={item.title}
                                Icon={item.icon}
                                isActive={false}
                                to={item.to}
                            />
                        })
                    }
                </div>
                <div>
                    <MenuItem
                        title="Logout"
                        isActive={false}
                        Icon={FiLogOut}
                        to="/"
                    />
                </div>

            </div>

        </div>
    )
};

export default Menu;