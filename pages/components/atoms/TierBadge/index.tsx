import React, { useEffect, useState } from "react";
import { checkTier, ITierInfo } from "util/checkTier";
interface ITierBadge {
  tier?: number;
}

const TierBadge = (props: ITierBadge) => {
  const { tier = 0 } = props;
  const [tierInfo, setTierInfo] = useState<ITierInfo>({
    text: "tier-unrated",
    borderColor: "border-tier-unrated",
    contents: "?",
  });
  useEffect(() => {
    setTierInfo(checkTier(tier));
  }, [tier]);
  return (
    <p
      className={`${tierInfo.borderColor} ${tierInfo.text} text-center mr-4 w-8 font-bold border-2 rounded-md`}
    >
      {tierInfo.contents}
    </p>
  );
};

export default TierBadge;
