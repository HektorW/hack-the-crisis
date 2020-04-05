import React from 'react'

import Card from '../Card'

import './image-card.scss'

interface ImageCardProps {
  height: number
  width: number
  src: string

  className?: string
}

export default function ImageCard({
  height,
  width,
  src,

  className
}: ImageCardProps) {
  return (
    <Card className={`image-card ${className ?? ''}`}>
      <img
        className="image-card__image"
        height={height}
        width={width}
        src={src}
      />
    </Card>
  )
}
