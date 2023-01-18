import CategoryLabel from "components/atoms/CategoryLabel";
import CategoryArea from "components/molecules/CategoryArea";
import RankChart from "components/molecules/RankChart";
import React from "react";

const RankChartArea = () => {
  return (
    <CategoryArea title={"Rank"}>
      <RankChart></RankChart>
    </CategoryArea>
  );
};

export default RankChartArea;
