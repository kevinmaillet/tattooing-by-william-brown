import React from "react"
import Layout from "../layout/Layout"
import Img from 'gatsby-image'

const Contact = (props) => {


  const [ about ]   = props.data.sanityContact.about;

  const contactArray = about._rawChildren.map((obj)=> {
    return obj.text;
  });

  const [ textOne, email, textTwo, ig, textThree] = contactArray;


  return (
    <Layout title="Contact">
      <div className="contact" >
        <p className="about-text" >
          {textOne}
          <a href={`mailto:${email}`}>{email}</a>
          {textTwo}
          <a href="https://www.instagram.com/williampbrown" target="_blank" rel="noreferrer">{ig}</a>
          {textThree}
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
    about {
      _key
      _type
      style
      list
      _rawChildren
    }
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
