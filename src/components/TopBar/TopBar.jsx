import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import FavoritesIndicator from "../FavoritesIndicator/FavoritesIndicator"

import "./TopBar.css"

const TopBar = () => {
  return (
    <Container fluid className="TopBar d-flex justify-content-between align-items-center">
      <Link to="/">
        <h1 className="py-1 text-center m-0">Remotive Strive</h1>
      </Link>
      <FavoritesIndicator />
    </Container>
  )
}

export default TopBar
