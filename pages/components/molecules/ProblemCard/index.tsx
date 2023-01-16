import RoundedCard from "components/atoms/RoundedCardButton";
import TierBadge from "components/atoms/TierBadge";
import React from "react";

const ProblemCard = () => {
  return (
    <RoundedCard>
      <div className="w-full h-full p-6 flex flex-col flex-wrap justify-end items-start">
        <strong className="text-xl">1022</strong>
        <div className="flex items-center">
          <p className="pr-2">터렛</p>
          <TierBadge tier={7} size={"sm"}></TierBadge>
        </div>
      </div>
    </RoundedCard>
  );
};

export default ProblemCard;
