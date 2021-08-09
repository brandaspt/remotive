import { Container, InputGroup, FormControl, Row, Col } from "react-bootstrap"

import "./TopBar.css"

export default function TopBar() {
  return (
    <Container fluid className="TopBar">
      <Row>
        <Col md={4} className="d-flex align-items-center">
          <h1>Remotive Strive</h1>
        </Col>

        <Col md={{ span: 4, offset: 4 }} className="d-flex align-items-center">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Search Jobs</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}
