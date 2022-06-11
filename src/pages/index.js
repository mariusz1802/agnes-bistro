import React, { Fragment } from "react"
import Layout from "../components/Layout"
import GlobalStyle from "../components/styles/GlobalStyles"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Sweets from "../components/Sweets"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
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
