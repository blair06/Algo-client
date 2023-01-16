import CategoryLabel from "components/atoms/CategoryLabel";
import ProblemCard from "components/molecules/ProblemCard";
import React from "react";

//TODO: API 호출
const ProblemArea = () => {
  return (
    <>
      <CategoryLabel>Problems</CategoryLabel>
      <div className="pt-11 px-11 grid grid-cols-4 gap-4">
        <ProblemCard></ProblemCard>
      </div>
    </>
  );
};

export default ProblemArea;
