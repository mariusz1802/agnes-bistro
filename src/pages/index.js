import React from "react"
import layout from "../components/layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Realizations from "../components/Realizations"
import Contact from "../components/Contact"
import ScrollUpBtn from "../components/ScrollUpBtn/ScrollUpBtn"
import Footer from "../components/Footer"

const IndexPage = () => (
  <layout>
    <Seo title="Home" />
    <Hero />
    <ScrollUpBtn />
    <AboutMe />
    <Realizations />
    <Contact />
    <Footer />
  </layout>
)

export default IndexPage
