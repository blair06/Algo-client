export interface ITierInfo {
  text: string;
  borderColor: string;
  contents: string;
}
const tierInfo = {
  "tier-unrated": {
    text: "text-tier-unrated",
    borderColor: "border-tier-unrated",
    contents: "?",
  },
  "tier-bronze": {
    text: "text-tier-bronze",
    borderColor: "border-tier-bronze",
    contents: "?",
  },
  "tier-silver": {
    text: "text-tier-silver",
    borderColor: "border-tier-silver",
    contents: "?",
  },
  "tier-gold": {
    text: "text-tier-gold",
    borderColor: "border-tier-gold",
    contents: "?",
  },
  "tier-platinum": {
    text: "text-tier-platinum",
    borderColor: "border-tier-platinum",
    contents: "?",
  },
  "tier-diamond": {
    text: "text-tier-diamond",
    borderColor: "border-tier-diamond",
    contents: "?",
  },
  "tier-ruby": {
    text: "text-tier-ruby",
    borderColor: "border-tier-ruby",
    contents: "?",
  },
};
export const checkTier = (tier: number) => {
  if (1 <= tier && tier <= 5) {
    tierInfo["tier-bronze"]["contents"] = "B" + (6 - tier);
    return tierInfo["tier-bronze"];
  }
  if (6 <= tier && tier <= 10) {
    tierInfo["tier-silver"]["contents"] = "S" + (11 - tier);
    return tierInfo["tier-silver"];
  }
  if (11 <= tier && tier <= 15) {
    tierInfo["tier-gold"]["contents"] = "G" + (16 - tier);
    return tierInfo["tier-gold"];
  }
  if (16 <= tier && tier <= 20) {
    tierInfo["tier-platinum"]["contents"] = "P" + (21 - tier);
    return tierInfo["tier-platinum"];
  }
  if (21 <= tier && tier <= 25) {
    tierInfo["tier-diamond"]["contents"] = "D" + (26 - tier);
    return tierInfo["tier-diamond"];
  }
  if (26 <= tier && tier <= 30) {
    tierInfo["tier-ruby"]["contents"] = "R" + (31 - tier);
    return tierInfo["tier-ruby"];
  }
  return tierInfo["tier-unrated"];
};
