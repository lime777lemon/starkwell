import * as React from "react";
import { NavigationItemProps } from "../types";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  href,
}) => (
  <div className="flex justify-center items-center self-stretch my-auto text-center">
    <a href={href} className="self-stretch my-auto">
      {text}
    </a>
  </div>
);
