import ProblemArea from "components/organisms/ProblemArea";
import RankChartArea from "components/organisms/RankChartArea";

const MainPage = () => {
  return (
    <div className="w-full overflow-y-scroll">
      <header className="pl-11 pt-24 pb-20">
        <p className="text-4xl">
          스터디 <span className="text-primary">78</span>일째
        </p>
        <p className="pt-2 text-sm text-gray-400">스터디 시작일: 2022-11-19</p>
      </header>
      <ProblemArea></ProblemArea>
      <RankChartArea></RankChartArea>
    </div>
  );
};

export default MainPage;
