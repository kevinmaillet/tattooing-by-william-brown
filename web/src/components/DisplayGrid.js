import React from "react"
import ImageCard from "./ImageCard"

const DisplayGrid = props => {
  let { images } = props

  const sortPhotos = images => {
    return images.sort((a, b) => (a.node.title > b.node.title ? 1 : -1))
  }

  images = sortPhotos(images)

  const renderImages = images.map(image => {
    if (image.node.image) {
      return (
        <ImageCard
          key={image.node.id}
          img={image.node.image.asset.fluid}
          alt={image.node.title}
        />
      )
    }
    return images
  })

  return <div className="displaygrid-container">{renderImages}</div>
}

export default DisplayGrid
