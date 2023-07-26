import { FC, useState, useEffect, useRef } from "react";
import IconElementProps from "@/components/shared/IconElement/types";
import { NotificationModal } from "@/components/notificationModal";




const IconElement: FC<IconElementProps> = ({ Icon, count }) => {

    const [isModal, setIsModal] = useState(false);

    const handleModalClick = () => setIsModal(state => !state);

    const closeModal = () => setIsModal(false);



    return (
        <div className="cursor-pointer p-[18px] relative rounded-[10px] bg-main-700" onClick={handleModalClick} >
            <Icon className='w-6 h-6' />
            {
                count > 0 ? <div className="w-[20px] h-[20px] text-white flex items-center justify-center bg-main-800 rounded-full text-[10px] absolute top-[-10px] right-[-10px]">
                    {count}
                </div> : null
            }
            <NotificationModal
                isHidden={isModal}
                modalData={[]}
                changeModal={closeModal}
            />

        </div>
    )
};

export default IconElement;