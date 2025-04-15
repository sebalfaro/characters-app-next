import Image from "next/image";
import React from "react";

export const ImageBanner = () => {
  return (
    <div className="h-full w-full sm:w-full absolute z-[-10]">
      <div className="h-full w-full relative isolate flex flex-col justify-center items-center">
        <div className="bg-radial-overlay w-full h-full absolute"></div>
        <div className="h-full sm:w-full sm:h-auto min-w-[1536px] aspect-4/3 z-[-10] absolute">
          <Image
            src="/welcome.jpg"
            alt="welcome page image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
