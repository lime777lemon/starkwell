import * as React from "react";
import Image from 'next/image';

interface ComparisonCardProps {
  title: string;
  icon: string;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, icon }) => (
  <div className="flex flex-col items-start flex-1 w-full max-w-[300px]">
    <div className="flex flex-col justify-center items-center px-5 bg-white rounded-md border border-solid shadow-md border-zinc-200 h-[108px] w-[108px] max-md:px-5">
      <Image
        loading="lazy"
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="object-contain w-full aspect-square"
      />
    </div>
    <div className="gap-2.5 self-stretch p-2.5 text-xl font-bold leading-7 text-sky-600 whitespace-nowrap">
      {title}
    </div>
  </div>
);
