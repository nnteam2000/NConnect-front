import { FC, useState } from "react";
import Post from "@/components/post/post";

import avatar from '../../public/images/avatar.png';
import post from '../../public/images/postImage.jpg';

import { PostArticleModal } from "@/components/postArticleModal";

const PostWrapper: FC = () => {
    const commentsContent = [
        {
            userName: 'giga11',
            userIcon: avatar,
            commentContent: "hey it is my first comment"
        }
    ];


    const [isModal, setIsModal] = useState(false);

    const handleModal = () => {
        setIsModal(state => !state)
    };

    return <div className="flex flex-col gap-[30px] ml-[290px] mt-[30px] pr-[20px]">
        {
            isModal && (
                <PostArticleModal 
                    userName="someone"
                    userIcon={avatar}
                    handleModal={handleModal}
                />
            )
        }
        <div
            onClick={handleModal}
            className="cursor-pointer p-[8px] rounded-[6px] bg-main-900 text-white font-bold w-[150px] text-center">
            Write a Post...
        </div>
        <Post
            userIcon={avatar}
            userName="giga11"
            content="“რტსგსერგსეგსე” ფილმი - გინტამა (2003)"
            postImage={post}
            likes={10}
            comments={20}
            commentsContent={commentsContent}
        />

        <Post
            userIcon={avatar}
            userName="giga11"
            content="“რტსგსერგსეგსე” ფილმი - გინტამა (2003)"
            postImage={post}
            likes={10}
            comments={20}
            commentsContent={commentsContent}
        />
    </div>;
};

export default PostWrapper;