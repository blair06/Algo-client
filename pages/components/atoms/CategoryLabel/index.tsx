import React from "react";

const CategoryLabel = ({ children }: { children: string }) => {
  return (
    <div className=" border-b-4 border-b-primary w-64">
      <p className="text-4xl leading-6 text-right font-semibold">{children}</p>
    </div>
  );
};

export default CategoryLabel;
