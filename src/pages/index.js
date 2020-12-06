import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

import logo from "../images/CSCODERSHUB3.png"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

const Home = props => (
  <div>
    <Header />
    <SEO title="About" />
    <BackgroundImage
      fluid={props.data.indexImage.childImageSharp.fluid}
      className="background"
    >
      Test
    </BackgroundImage>
    {/** 
 <div className="front">
      <img src={logo} className="front" alt="dp" />
    </div> 
**/}
    <p class="line anim-typewriter">CSCODERSHUB</p>
    <div className="text">
      <p>Community of coders and hackers</p>
      <a href="something" className="button1">
        Connect to Discord
      </a>
    </div>

    <div className="abouts-section">
      <h1>About CSCODERSHUB</h1>
      <p className="about-text">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </div>
  </div>
)

export default Home

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
