import React from "react";
interface IRoundedCard {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: "sm" | "md";
}
const RoundedCard = (props: IRoundedCard) => {
  const { children, backgroundColor, size = "md" } = props;
  return (
    <button
      className={`w-full ${
        size === "sm" ? "h-20" : "h-40"
      } shadow-md rounded-md ${backgroundColor}`}
    >
      {children}
    </button>
  );
};

export default RoundedCard;
