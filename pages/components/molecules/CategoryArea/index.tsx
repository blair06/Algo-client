import CategoryLabel from "components/atoms/CategoryLabel";
import React, { ReactNode } from "react";

interface ICategoryArea {
  children: ReactNode;
  title: string;
}
const CategoryArea = (props: ICategoryArea) => {
  const { children, title } = props;
  return (
    <>
      <CategoryLabel>{title}</CategoryLabel>
      <div className="mb-20 mt-11 mx-11 ">{children}</div>
    </>
  );
};

export default CategoryArea;
