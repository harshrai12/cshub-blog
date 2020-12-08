
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import discord from"../images/kisspng-discord-computer-icons-logo-online-chat-discord-5b2291673db518.4803332115289921032528.png"
import instagram from "../images/logo-ig-instagram-new-logo-vector-download-13.png"
import bird from "../images/twitter-bird-symbols-png-logo-0.png"

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
     Connect with us
      </a>
      <div class="icons_connect">
      <a href= "https://discord.com/invite/K5K9Yaz" className="button1">
      <img src={discord} className="dlogo"/>
      </a><a href= "http://instagram.com/cscodershub" className="button1">
      <img src={instagram} className="dlogo"/>
      </a><a href= "http://twitter.com/cscodershub" className="button1">
      <img src={bird} className="dlogo"/>
      </a>
      </div>
    </div>

    <div className="abouts-section">
      <h1>About CSCODERSHUB</h1>
      <p className="about-text">
      CSCODERSHUB is a community of coders and cyber security enthusiasts, here we believe in sharing/discussing our knowledge with other members for enhancement and learning. We provide free guidance to beginners of the community. CSCODERSHUB team consists of hardworking and focused members who are ready to serve for the community without any personal benefit. We are dedicated towards building a community which can provide opportunity to members (beginners) to learn more about new technologies for free of cost.
      Anyone can Join Us as a member or as a team. for more details contact <a href="cscodershub@gmail.com">cscodershub@gmail.com</a> and 
      <a href="admin@cscodershub.tech">admin@cscodershub.tech</a>
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