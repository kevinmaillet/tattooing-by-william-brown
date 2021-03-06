import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/myIcon.png"
import appleImage from "../images/apple-icon.png"

const SEO = ({ title, description, article }) => {
  const { pathname } = useLocation()
  const { site, sanitySiteSettings } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    author,
  } = site.siteMetadata

  const { keywords } = sanitySiteSettings

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    author: author,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={appleImage} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta property="og:locale" content="en_US" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon}></link>
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        author
      }
    }
    sanitySiteSettings {
      keywords
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
}
