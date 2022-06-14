import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { StaticImage } from "gatsby-plugin-image"
import { Slider } from "theme-ui"
import { gatsby, useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"
import HeroSlider from "./HeroSlider"

function Hero() {
  return (
    <>
      <HeroContainer>
        {/* <StaticImage
          src="../assets/images/hero.jpg"
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "cover" }}
        /> */}
        <HeroSlider />
      </HeroContainer>
    </>
  )
}

export default Hero

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
`
