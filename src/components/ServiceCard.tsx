import * as React from "react";
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="flex flex-col items-start w-full max-md:max-w-full">
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
    <div className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-lg leading-7 text-sky-600 whitespace-nowrap font-[350] max-md:max-w-full">
      {description}
    </div>
  </div>
);
