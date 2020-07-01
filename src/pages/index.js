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
                {data.allContentfulCshub.edges.map(({ node }) => (
                  <Post
                    title={node.title}
                    path={node.slug}
                    author={node.author}
                    date={node.date}
                    fluid={node.images.fluid}
                  />
                ))}
              </div>
            )
          }}
        />
      </Col>
      <Col md="4">
        <div>
          <Sidebar />
        </div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allContentfulCshub ( sort: { fields: date, order: DESC } ) {
      edges {
        node {
          title
          slug
          path
          date
          author
          images {
            title
            fluid(maxWidth: 600, maxHeight:300) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage
