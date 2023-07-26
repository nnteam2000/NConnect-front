import { FC, useState } from "react";
import PostArticleModalProps from "@/components/postArticleModal/types";
import Image from "next/image";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdPhotoCamera } from 'react-icons/md';

const PostArticleModal: FC<PostArticleModalProps> = ({
    userName,
    userIcon,
    handleModal
}) => {
    return (
        <div className="fixed w-full h-[100vh] left-0 top-0 overflow-hidden">


            <div className="absolute w-full h-full left-0 top-0 bg-black z-20 opacity-[0.5]" onClick={handleModal}>

            </div>

            <div className="p-[10px] flex flex-col gap-[20px] z-30 absolute w-[800px] bg-[#ebebeb] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">

                <div className="flex items-center justify-between p-[10px]">
                    <p className="text-bold text-[22px] border-dash border-s-4 border-cyan-950 pl-[6px]">Write a New Article </p>
                    <AiOutlineCloseCircle onClick={handleModal} className="cursor-pointer" />
                </div>

                <div className="flex items-center gap-[10px]">
                    <div className="rounded-full bg-white overflow-hidden">
                        <Image
                            alt="userIcon"
                            src={userIcon}
                            width={56}
                            height={56}
                        />
                    </div>
                    <p className="text-[24px] font-bold">
                        {userName}
                    </p>
                </div>

                <div>
                    <textarea className="w-full h-[200px] outline-0 rounded-[10px] p-[10px]" defaultValue="Post Content..." name="postContent" id="postContent" />

                </div>

                <div className="flex items-center gap-[20px]">
                    <div>
                        <MdPhotoCamera size="2em" />
                    </div>
                    <div>
                        <input type="file" />
                    </div>
                </div>

                <div >
                    <button className="p-[10px] w-full bg-red-900 text-white font-bold">Add Post</button>
                </div>


            </div>

        </div>
    )
};

export default PostArticleModal;