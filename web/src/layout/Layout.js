import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import '../styles/main.css'

const Layout = (props) => {
  return (
    <div className="wrapper">
    {/* <Helmet>
        <title>Tattooing by William Brown</title>
        <meta name="description" content="Tattoo Artist"/>
        <meta name="keywords" content="Tattoo Artist" />
        <meta name="og:url" content="https://kevinmaillet.space/" />
        <meta property="og:site_name" content="Tattooing by William Brown" />
        <meta property="og:locale" content="en_US" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet"></link>
    </Helmet> */}
      <SEO title={props.title}/>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
