import Image from 'next/image'
import React from 'react'

export const WelcomeLogo = () => {
  return (
    <div className="relative w-[343px] aspect-20/7">
      <Image
        src="/welcomeLogo.png"
        alt="Rick and Morty logo"
        fill
        className="object-cover"
      />
    </div>
  )
}
