import React, { FC } from "react";
import PostProps from "@/components/post/types";
import Image from "next/image";
import { BiMessage } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

const Post: FC<PostProps> = ({
    userIcon,
    userName,
    content,
    postImage,
    likes,
    comments,
    commentsContent
}) => {
    return (
        <div className="flex flex-col gap-[15px] p-[10px] rounded-[10px] bg-[#e8e8e8] max-w-[1000px] ">

            <div className="flex items-center gap-[10px] cursor-pointer">
                <div className="bg-white rounded-full overflow-hidden">
                    <Image
                        alt="userIcon"
                        src={userIcon}
                        width={48}
                        height={48}
                        className="w-[100%] h-[100%] object-cover"
                    />
                </div>
                <div>
                    <p className="text-[18px] text-black font-bold">{userName}</p>
                </div>
            </div>

            <div className="flex flex-col gap-[15px]">

                <div>
                    {content}
                </div>

                <div className="h-[500px] rounded-[10px] overflow-hidden">
                    <Image
                        width={100}
                        height={500}
                        alt="postPicture"
                        src={postImage}
                        className="w-[100%] h-[100%] object-cover"
                    />
                </div>

                <div className="flex items-center gap-[10px] pb-[10px] border-b-2 border-white">

                    <div className="flex items-center gap-[4px] cursor-pointer">
                        <div>{comments}</div>
                        <div>
                            <BiMessage />
                        </div>
                    </div>

                    <div className="flex items-center gap-[4px] cursor-pointer">
                        <div>{likes}</div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                    </div>

                </div>


            </div>

            <div>

            </div>

            <div className="flex items-center gap-[16px] w-full">

                <div className="rounded-full bg-white overflow-hidden ">
                    <Image
                        width={40}
                        height={40}
                        alt="commentUser"
                        src={userIcon}
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="w-full">
                    <input type="text" placeholder="write a comment" className="outline-0 rounded-[6px] px-[10px] py-[10px] w-full" />
                </div>

            </div>

        </div>
    )
};

export default Post;    