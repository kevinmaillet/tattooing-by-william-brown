import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import DisplayGrid from "../components/DisplayGrid"

const Tattoos = ({ data }) => {
  return (
    <Layout title="Tattoos">
      <DisplayGrid
        images={data.allSanityTattooImage.edges}
        search="allSanityTattooImage"
      />
    </Layout>
  )
}

export const query = graphql`
  query Tattoo {
    allSanityTattooImage {
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

export default Tattoos
