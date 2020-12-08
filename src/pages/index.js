import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import discord from"../images/kisspng-discord-computer-icons-logo-online-chat-discord-5b2291673db518.4803332115289921032528.png"

import logo from "../images/CSCODERSHUB3.png"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Team from "../components/teammember"

const Home = props => (
  <div>
    <Header />
    <SEO title="About" />
   
    {/** 
 <div className="front">
      <img src={logo} className="front" alt="dp" />
    </div> 
**/}
    <p class="line anim-typewriter">CSCODERSHUB</p>
    <div className="text">
      <p>Community of coders and hackers</p>
      <a href= "https://discord.com/invite/K5K9Yaz" className="button1">
      <img src={discord} className="dlogo"/>Connect to Discord 
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
      <Team/>
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
