import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./TopBar.css"

const TopBar = () => {
  return (
    <Container fluid className="TopBar">
      <Link to="/">
        <h1 className="py-1 text-center">Remotive Strive</h1>
      </Link>
    </Container>
  )
}

export default TopBar
