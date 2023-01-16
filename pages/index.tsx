import CategoryLabel from "components/atoms/CategoryLabel";
import RoundedCard from "components/atoms/RoundedCardButton";
import ProblemCard from "components/molecules/ProblemCard";
import ProblemArea from "components/organisms/ProblemArea";
import React from "react";
import ProfileArea from "./components/organisms/ProfileArea";

const MainPage = () => {
  return (
    <div className="w-full">
      <header className="pl-11 pt-24 pb-20">
        <p className="text-4xl">
          스터디 <span className="text-primary">78</span>일째
        </p>
        <p className="pt-2 text-sm text-gray-400">스터디 시작일: 2022-11-19</p>
      </header>
      <ProblemArea></ProblemArea>
    </div>
  );
};

export default MainPage;
