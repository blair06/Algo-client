import React from "react";
import CircleCard from "../../atoms/CircleCard";
import ProfileLabel from "../../atoms/ProfileLabel/indext";

const ProfileInfoCard = () => {
  return (
    <div className="flex flex-col items-center">
      <CircleCard profileImg="https://static.solved.ac/uploads/profile/0565b63f0b204e990d1b163018a1c358992519b8.png" />
      <div className=" mt-16">
        <ProfileLabel contents="blair06" />
      </div>
    </div>
  );
};

export default ProfileInfoCard;
