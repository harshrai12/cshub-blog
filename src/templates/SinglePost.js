
import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
   <Layout>
    <div>
      <Link to="/">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div className="blog-info">
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      </div>
      <Card>
      <div className="blog-text">
      <div dangerouslySetInnerHTML={{ __html: post.html }} /></div></Card>
    </div>
    
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
  `