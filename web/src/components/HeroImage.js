import React from "react"
import BackgroundImage from "gatsby-background-image"

const HeroImage = ({ className, Tag, fluid }) => {
  return <BackgroundImage className={className} Tag={Tag} fluid={fluid} />
}

export default HeroImage
