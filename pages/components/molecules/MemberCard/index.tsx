import RoundedCard from "components/atoms/RoundedCardButton";
import TierBadge from "components/atoms/TierBadge";
import React from "react";

const MemberCard = () => {
  return (
    <div className="w-full px-3 py-1">
      <RoundedCard backgroundColor={"bg-[#1f2b269c]"} size="sm">
        <div className="flex items-center p-3">
          <TierBadge tier={14} />
          <p className="text-onPrimary">blair</p>
        </div>
      </RoundedCard>
    </div>
  );
};

export default MemberCard;
