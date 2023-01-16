import React from "react";

const RoundedCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full h-40 shadow-md rounded-md">{children}</button>
  );
};

export default RoundedCard;
