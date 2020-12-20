import React from "react"
import Layout from "../layout/Layout"
import Img from 'gatsby-image'

const Contact = (props) => {
  return (
    <Layout title="Contact">
      <div style={{marginTop: `5rem`}}>
        <p style={{maxWidth: `67ch`, fontSize: `2rem`}}>
          {props.data.sanityAbout.about}
        </p>
        <Img
            className="img"
            fluid={props.img}
            alt={props.alt}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
query Contact {
  sanityAbout {
    about
  }
}

`

export default Contact
