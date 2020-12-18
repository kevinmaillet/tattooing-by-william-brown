import React from "react"
import Layout from "../layout/Layout"

const Contact = ({data}) => {
  return (
    <Layout title="Contact">
      <div style={{marginTop: `5rem`}}>
        <p style={{maxWidth: `67ch`, fontSize: `2rem`}}>
          {data.sanityAbout.about}
        </p>
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
