import React from "react"
import Layout from "../layout/Layout"

const notFound = () => {
  return (
    <Layout>
      <div
        style={{
          paddingTop: `6rem`,
        }}
      >
        <p
          style={{
            textAlign: `center`,
            fontSize: `1.5rem`,
          }}
        >
          Aye mate, this page doesn't exist
        </p>
      </div>
    </Layout>
  )
}

export default notFound
