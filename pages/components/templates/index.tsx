import ProfileArea from "components/organisms/ProfileArea";
import React from "react";

const BaseTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <nav className="bg-primary w-96 h-11 absolute right-0 ">
        <ul className="h-full flex justify-around items-center text-white">
          <li>Problems</li>
          <li>history</li>
          <li>Rank</li>
          <li>|</li>
          <li>Members</li>
        </ul>
      </nav>
      <ProfileArea></ProfileArea>
      {children}
    </div>
  );
};

export default BaseTemplate;
