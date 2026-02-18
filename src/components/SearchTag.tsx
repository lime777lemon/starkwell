import * as React from "react";
import Image from 'next/image';

interface SearchTagProps {
  text: string;
  icon: string;
}

export const SearchTag: React.FC<SearchTagProps> = ({ text, icon }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
    <Image
      src={icon}
      alt={text}
      width={24}
      height={24}
      className="w-6 h-6"
    />
    <span className="text-sm text-gray-700">{text}</span>
  </div>
);
