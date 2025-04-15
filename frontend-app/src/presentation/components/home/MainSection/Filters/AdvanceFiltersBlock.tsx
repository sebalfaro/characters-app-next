"use client";
import React, { useEffect, useState } from "react";
import { FilterTagButton } from "./FilterTagButton";

interface Props<T extends string> {
  title: string;
  filtersTags: T[];
  setFilter: (tag: T | undefined) => void;
}

export const AdvanceFiltersBlock = <T extends string>({
  title,
  filtersTags,
  setFilter,
}: Props<T>) => {
  const [currentValue, setCurrentValue] = useState<{
    value: T | undefined;
  }>({ value: undefined });

  useEffect(() => {
    setFilter(currentValue?.value);
  }, [currentValue, setFilter]);

  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-medium text-sm text-[#000000]">{title}</h4>
      <div className="flex gap-3">
        {filtersTags.map((tag) => (
          <FilterTagButton
            filterTag={tag}
            onClickHandler={setCurrentValue}
            blockValue={currentValue?.value}
            key={tag}
          />
        ))}
      </div>
    </div>
  );
};
