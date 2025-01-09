import * as React from "react";
import { SearchTagProps } from "../types";

export const SearchTag: React.FC<SearchTagProps> = ({ text, icon }) => (
  <div className="flex gap-2 justify-center items-center self-stretch px-4 py-2 my-auto bg-sky-600 rounded-[32px]">
    <div className="self-stretch my-auto underline decoration-auto decoration-solid underline-offset-auto">
      <span className="underline">{text}</span>
    </div>
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
    />
  </div>
);
