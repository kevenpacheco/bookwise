'use client'

import { useState } from 'react'
import { Rating, RoundedStar } from '@smastrom/react-rating'

interface RatingStarsProps {
  score?: number
  disabled?: boolean
  maxWidth?: number
  readOnly?: boolean
}

export function RatingStars({
  score,
  maxWidth = 96,
  readOnly = true,
  // maxWidth = 152,
  disabled,
}: RatingStarsProps) {
  const [value, setValue] = useState(() => score || 0)

  return (
    <Rating
      style={{ maxWidth }}
      value={value}
      onChange={setValue}
      readOnly={readOnly}
      itemStyles={{
        itemShapes: RoundedStar,
        itemStrokeWidth: 1,
        activeFillColor: '#8381D9',
        activeStrokeColor: '#8381D9',
        inactiveStrokeColor: '#8381D9',
      }}
    />
  )
}
