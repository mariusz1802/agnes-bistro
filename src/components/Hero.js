import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { StaticImage } from "gatsby-plugin-image"
import { Slider } from "theme-ui"
import { gatsby, useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

function Hero() {
  return (
    <>
      <HeroContainer>
        <StaticImage
          src="../assets/images/hero.jpg"
          style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "cover" }}
        />

        {/* <BackgroundSlider
          query={useStaticQuery(graphql`
            query {
              backgrounds: allFile(
                filter: { sourceInstanceName: { eq: "backgrounds" } }
              ) {
                nodes {
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 4000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `)}
        /> */}
      </HeroContainer>
    </>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  height: 100vh;
  width: 100%;
  margin-top: -120px;
  color: #fff;
  /* overflow: hidden; */
`
