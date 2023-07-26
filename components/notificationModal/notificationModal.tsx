import { FC, useEffect, useRef } from "react";
import NotificationModalProps from "@/components/notificationModal/types";
import Link from "next/link";

import useOutsideClick from "@/hooks/useOutside";

const NotificationModal: FC<NotificationModalProps> = ({
    modalData,
    isHidden,
    changeModal,
}) => {


    const notificationRef = useRef(null);
    const arrayOfRefs = [notificationRef];
    useOutsideClick(arrayOfRefs, changeModal);


    if (!isHidden) return null;

    return (
        <div ref={notificationRef} className={`bg-[#4f907a26] p-[30px] rounded-[10px] absolute left-[-300%] z-[100] bottom-[-200%] w-[400px]`} >
            <div className="flex items-center justify-between">
                <div>
                    <p>Notifications</p>
                </div>
                <div>
                    <Link href="/notifications">See All</Link>
                </div>
            </div>
        </div>
    )
};

export default NotificationModal;
