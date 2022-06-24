import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Realizations from "../components/Realizations"
import Contact from "../components/Contact"
import ScrollUpBtn from "../components/ScrollUpBtn/ScrollUpBtn"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ScrollUpBtn />
    <AboutMe />
    <Realizations />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
