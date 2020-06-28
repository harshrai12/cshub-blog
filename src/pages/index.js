import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Post from "../components/Post"
import Sidebar from "../components/sidebar"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Recent Articles</h1>
    <Row>
      <Col md="8">
        <StaticQuery
          query={indexQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    title={node.frontmatter.title}
                    path={node.frontmatter.path}
                    author={node.frontmatter.author}
                    body={node.excerpt}
                    date={node.frontmatter.date}
                    fluid={node.frontmatter.images.childImageSharp.fluid}
                  />
                ))}
              </div>
            )
          }}
        />
      </Col>
      <Col md="4">
        <div>
          <Sidebar/>
        </div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            author
            images {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
export default IndexPage
