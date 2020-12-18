import React from "react"
import { graphql } from 'gatsby';
import Layout from "../layout/Layout"
import HeroImage from '../components/HeroImage'

const Home = ({ data }) => {

  return (
    <Layout>
      <div style={{
        paddingTop: `1rem`
      }}>

      <HeroImage 
        className="hero"
        Tag="section"
        fluid={data.sanityHeroImage.image.asset.fluid}

      />
      </div>
    </Layout>
  )
}

export const query = graphql`
query HeroImage {
  sanityHeroImage {
    title
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
}

`

export default Home


