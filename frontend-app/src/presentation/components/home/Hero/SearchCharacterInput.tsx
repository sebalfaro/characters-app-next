"use client";
import React, { ChangeEvent } from "react";

interface Props {
  value: string | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchCharacterInput = ({ value, handleOnChange }: Props) => {
  return (
    <input
      className="bg-[#0e0f0da8] bg-blend-multiply h-full w-full pl-12 px-3 rounded-lg text-neutralLight placeholder:text-neutralLight"
      placeholder="Buscar personaje por nombre"
      value={value ?? ""}
      onChange={handleOnChange}
    />
  );
};
