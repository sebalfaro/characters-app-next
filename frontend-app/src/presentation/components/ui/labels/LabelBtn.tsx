import React from "react";

type Variant = "active" | "inactive"

interface Props {
  variant: Variant;
  children: string;
  clickHandler: () => void;
}

const variantClasses: Record<Variant, { bg: string; text: string }> = {
  active: {
    bg: "bg-primaryLight",
    text: "text-primaryExtraDark",
  },
  inactive: {
    bg: "bg-baseW",
    text: "text-primaryExtraDark",
  },
};

export const LabelButton = ({ variant, children, clickHandler }: Props) => {
  const { bg, text } = variantClasses[variant];

  return (
    <button
      className={`flex flex-col justify-center items-center h-9 ${text} ${bg} rounded-4xl py-[9.5px] px-4 cursor-pointer font-semibold text-sm leading-[100%]`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
