import React from "react"
import Layout from "../layout/Layout"
import Img from 'gatsby-image'

const Contact = (props) => {



  return (
    <Layout title="Contact">
      <div className="contact" >
        <p className="about-text" >
          {props.data.sanityContact.about}
        </p>
        <div className="about-photo" >
          <Img
                fluid={props.data.sanityContact.image.asset.fluid}
                alt={props.data.sanityContact.title}
            />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query Contact {
  sanityContact {
    about
    title
    image {
      asset {
        fluid(maxWidth: 450) {
         ...GatsbySanityImageFluid
        }
      }
    }
  }
}
`

export default Contact
