import React from 'react'
import { ToogleFavsFilter } from './ToogleFavsFilter'
import { AdvanceFiltersButton } from './AdvanceFiltersButton'

export const FiltersWrapper = () => {
  return (
    <div className='flex justify-between w-full'>
      <ToogleFavsFilter />
      <AdvanceFiltersButton />
    </div>
  )
}
