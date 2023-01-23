import MemberArea from "components/organisms/MemberArea";
import ProfileArea from "components/organisms/ProfileArea";
import React, { useState } from "react";

const BaseTemplate = ({ children }: { children: React.ReactNode }) => {
  const [openSideArea, setOpenSideArea] = useState<boolean>(false);
  return (
    <>
      <div className="flex h-screen overflow-y-hidden">
        <nav className="bg-primary w-96 h-11 absolute right-0 z-10 ">
          <ul className="h-full flex justify-around items-center text-white">
            <li>Problems</li>
            <li>history</li>
            <li>Rank</li>
            <li>|</li>
            <li onClick={() => setOpenSideArea(!openSideArea)}>Members</li>
          </ul>
        </nav>

        <ProfileArea></ProfileArea>
        {children}
        <MemberArea openSideArea={openSideArea}></MemberArea>
      </div>
    </>
  );
};

export default BaseTemplate;
