import React from "react";

export const WelcomeCopy = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-2.5 p-4 text-center">
      <h1 className="text-white font-bold text-2xl sm:text-4xl">
        Bienvenido a Rick and Morty
      </h1>
      <p className="max-w-[872px] text-baseW text-sm sm:text-lg font-medium sm:font-semibold leading-[20px] sm:leading-8">
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </p>
    </div>
  );
};
