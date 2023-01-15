import React from "react";
interface IProfileLabel {
  contents: string;
}
const ProfileLabel = (props: IProfileLabel) => {
  const { contents } = props;
  return <p className="text-onPrimary text-2xl">{contents}</p>;
};

export default ProfileLabel;
