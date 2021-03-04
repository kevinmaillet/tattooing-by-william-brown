import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import DisplayGrid from "../components/DisplayGrid"

const Paintings = ({ data }) => {
  return (
    <Layout title="Paintings">
      <DisplayGrid
        images={data.allSanityPaintingImage.edges}
        search="allSanityPaintingImage"
      />
    </Layout>
  )
}

export const query = graphql`
  query Painting {
    allSanityPaintingImage {
      edges {
        node {
          id
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
    }
  }
`

export default Paintings
