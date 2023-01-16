import ProfileArea from "components/organisms/ProfileArea";
import React from "react";

const BaseTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <ProfileArea></ProfileArea>
      {children}
    </div>
  );
};

export default BaseTemplate;
