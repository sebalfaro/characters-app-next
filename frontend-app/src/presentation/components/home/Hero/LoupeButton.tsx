import React from "react";
import { LoupeIcon } from "../../ui/icons";

export const LoupeButton = () => {
  return (
    <button
      className="size-12 absolute inset-y-0 left-0 flex justify-center items-center cursor-pointer"
      type="submit"
    >
      <LoupeIcon />
    </button>
  );
};
