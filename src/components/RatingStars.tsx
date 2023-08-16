'use client'

import { Rating, RoundedStar, RatingProps } from '@smastrom/react-rating'

interface RatingStarsProps extends RatingProps {
  maxWidth?: number
}

export function RatingStars({
  value = 0,
  maxWidth = 96,
  readOnly = true,
  ...rest
}: RatingStarsProps) {
  return (
    <Rating
      style={{ maxWidth }}
      value={value}
      readOnly={readOnly}
      itemStyles={{
        itemShapes: RoundedStar,
        itemStrokeWidth: 1,
        activeFillColor: '#8381D9',
        activeStrokeColor: '#8381D9',
        inactiveStrokeColor: '#8381D9',
      }}
      {...rest}
    />
  )
}
