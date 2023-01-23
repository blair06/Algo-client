import ProfileLabel from "components/atoms/ProfileLabel";
import RoundedCard from "components/atoms/RoundedCardButton";
import TierBadge from "components/atoms/TierBadge";
import MemberCard from "components/molecules/MemberCard";
import React from "react";
interface IMemberArea {
  openSideArea: boolean;
}
//TODO: opacity 조절 기능
const MemberArea = (props: IMemberArea) => {
  const { openSideArea } = props;

  return (
    <div
      className={`w-96 mt-11 h-screen absolute right-0 bg-primary 
          ease-in-out duration-300 ${
            openSideArea ? "translate-x-0 " : "translate-x-full"
          }`}
    >
      <MemberCard></MemberCard>
      <MemberCard></MemberCard>
      <MemberCard></MemberCard>
      <MemberCard></MemberCard>
    </div>
  );
};

export default MemberArea;
