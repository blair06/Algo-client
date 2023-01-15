import React from "react";
interface IProfileLabel {
  contents: string;
}
const ProfileLabel = (props: IProfileLabel) => {
  const { contents } = props;
  return <p className="text-onPrimary text-3xl">{contents}</p>;
};

export default ProfileLabel;
