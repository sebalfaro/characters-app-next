import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface FilterTagButtonProp<T extends string> {
  filterTag: T | undefined;
  onClickHandler: Dispatch<SetStateAction<{ value: T | undefined }>>;
  blockValue: T | undefined;
}

type Variant = "active" | "inactive";

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

export const FilterTagButton = <T extends string>({
  filterTag,
  onClickHandler,
  blockValue,
}: FilterTagButtonProp<T>) => {
  const [variant, setVariant] = useState<Variant>("inactive");
  const { bg, text } = variantClasses[variant];

  useEffect(() => {
    if (blockValue === filterTag) {
      setVariant("active");
    }
    if (blockValue !== filterTag) {
      setVariant("inactive");
    }
  }, [blockValue, filterTag]);

  const handleAddFilter = (event: React.MouseEvent) => {
    event.preventDefault();
    if (variant === "active") {
      onClickHandler({ value: undefined });
    }
    if (variant === "inactive") {
      onClickHandler({ value: filterTag as T });
    }
  };

  return (
    <button
      onClick={(event) => handleAddFilter(event)}
      className={`py-[6px] px-3 border border-neutralMedium rounded-[24px] ${bg} ${text}`}
    >
      {filterTag}
    </button>
  );
};
