import CircleCard from "components/atoms/CircleCard";
import ProfileLabel from "components/atoms/ProfileLabel";
import TierBadge from "components/atoms/TierBadge";

const ProfileInfoCard = () => {
  return (
    <div className="flex flex-col items-center">
      <CircleCard profileImg="https://static.solved.ac/uploads/profile/0565b63f0b204e990d1b163018a1c358992519b8.png" />
      <div className=" mt-16 flex items-center">
        <TierBadge tier={14} />
        <ProfileLabel contents="blair06" />
      </div>
    </div>
  );
};

export default ProfileInfoCard;
