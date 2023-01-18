import ProfileArea from "components/organisms/ProfileArea";
import React, { useState } from "react";

const BaseTemplate = ({ children }: { children: React.ReactNode }) => {
  const [openSideArea, setOpenSideArea] = useState<boolean>();
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
        {/* <div
          className={`w-96 h-screen absolute right-0 bg-primary
          ease-in-out duration-300 ${
            openSideArea ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          dd
        </div> */}
      </div>
    </>
  );
};

export default BaseTemplate;
