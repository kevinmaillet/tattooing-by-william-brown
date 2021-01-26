import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import '../styles/main.css'

const Layout = (props) => {
  return (
    <div className="wrapper">
      <SEO title={props.title}/>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
