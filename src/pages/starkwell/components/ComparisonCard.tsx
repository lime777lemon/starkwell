import * as React from "react";
import { ComparisonCardProps } from "../types";

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  title,
  icon,
}) => (
  <div className="flex flex-1 shrink justify-center bg-white rounded-xl border border-solid shadow-md basis-0 border-cyan-950 border-opacity-50 min-h-[163px] min-w-[300px]">
    <div className="flex flex-col flex-1 shrink justify-center text-xl font-bold leading-7 text-sky-600 basis-0">
      <div className="overflow-hidden pr-7 pl-8 w-full max-md:px-5">
        {title}
      </div>
    </div>
    <div className="flex justify-between items-center h-full text-lg font-bold leading-none text-white rounded-none bg-cyan-950 w-[130px]">
      <div className="flex flex-1 shrink gap-6 justify-between items-center self-stretch px-2.5 my-auto w-full basis-0">
        <div className="self-stretch my-auto">価格比較</div>
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      </div>
    </div>
  </div>
);
