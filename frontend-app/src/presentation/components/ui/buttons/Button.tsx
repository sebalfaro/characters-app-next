import React from "react";

type Variant = "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";

interface Props {
  variant: Variant;
  children: string;
  clickHandler: () => void;
}

const variantClasses: Record<Variant, { bg: string; text: string }> = {
  primary: {
    bg: "bg-baseW",
    text: "text-primaryExtraDark",
  },
  secondary: {
    bg: "bg-primaryColor",
    text: "text-primaryExtraDark",
  },
  tertiary: {
    bg: "bg-primaryDark",
    text: "text-primaryExtraLight",
  },
  quaternary: {
    bg: "bg-primaryExtraLight",
    text: "text-primaryExtraDark",
  },
  quinary: {
    bg: "bg-primaryLight",
    text: "text-primaryExtraDark",
  },
};

export const Button = ({ variant, children, clickHandler }: Props) => {
  const { bg, text } = variantClasses[variant];

  return (
    <button
      className={`flex flex-col justify-center items-center ${text} ${bg} rounded-4xl py-3 px-6 cursor-pointer`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
