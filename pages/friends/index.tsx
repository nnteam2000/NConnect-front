import { FC } from "react";

import { Menu } from "@/components/menu";
import { Header } from "@/components/header";
import { PostWrapper } from "@/components/postsWrapper";

const Friends: FC = () => {
  return (
    <div className="bg-main-1000">

      <Menu />
      <Header />

    </div>
  )
};

export default Friends;