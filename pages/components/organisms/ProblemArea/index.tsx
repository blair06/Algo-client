import CategoryArea from "components/molecules/CategoryArea";
import ProblemCard from "components/molecules/ProblemCard";
import React from "react";

//TODO: API 호출
const ProblemArea = () => {
  return (
    <CategoryArea title={"Problems"}>
      <div className="grid grid-cols-4 gap-4 ">
        <ProblemCard></ProblemCard>
        <ProblemCard></ProblemCard>
        <ProblemCard></ProblemCard>
        <ProblemCard></ProblemCard>
        <ProblemCard></ProblemCard>
        <ProblemCard></ProblemCard>
      </div>
    </CategoryArea>
  );
};

export default ProblemArea;
