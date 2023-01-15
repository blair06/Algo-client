import React from "react";
import Image from "next/image";
interface ICircleCard {
  profileImg: string;
}
const CircleCard = (props: ICircleCard) => {
  const { profileImg } = props;
  return (
    <div className="w-44 h-44">
      <Image
        className="rounded-full"
        src={profileImg}
        alt="profileImage"
        placeholder="empty"
        width={3000}
        height={3000}
      />
    </div>
  );
};

export default CircleCard;
