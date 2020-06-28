import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap"

const Sidebar = () => {
  return (
    <div className="news">
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            Newsletter
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </FormGroup>
            <button type="button" class="btn btn-outline-success">
            Subscribe
          </button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Sidebar
