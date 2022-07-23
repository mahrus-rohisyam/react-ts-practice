import React from "react";

type Props = {
  icon: string;
  svg: JSX.Element | any;
  className?: JSX.ElementAttributesProperty | any;
  link?: string;
};

const IconContainer = ({ icon, svg, className, link }: Props) => {
  return (
    <li className={` ${className}`}>
      <a className="block items-center p-3 hover:bg-orange-300 rounded-xl" href={link ? link : "#"}>
        {svg}
        <label className="sr-only">{icon}</label>
      </a>
    </li>
  );
};

export default IconContainer;
