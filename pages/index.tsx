import CategoryLabel from "components/atoms/CategoryLabel";
import RoundedCard from "components/atoms/RoundedCardButton";
import ProblemCard from "components/molecules/ProblemCard";
import ProblemArea from "components/organisms/ProblemArea";
import React from "react";
import ProfileArea from "./components/organisms/ProfileArea";

const MainPage = () => {
  return (
    <div className="w-full">
      <ProblemArea></ProblemArea>
    </div>
  );
};

export default MainPage;
