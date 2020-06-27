import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

const Post = ({ title, author, path, date, body }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          <span className="infos">{date}</span>{" "}by{" "}
          <span className="infos">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <Link to={path}>
          <button type="button" class="btn btn-outline-success float-right">
            Read more
          </button>
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
