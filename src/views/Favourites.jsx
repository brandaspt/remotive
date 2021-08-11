import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import FavoriteItem from "../components/FavoriteItem/FavoriteItem"

const mapStateToProps = state => state

const Favourites = ({ favorites }) => {
  return (
    <Container className="d-flex flex-wrap justify-content-center align-items-center">
      {favorites.map(companyName => (
        <FavoriteItem key={companyName} companyName={companyName} />
      ))}
    </Container>
  )
}

export default connect(mapStateToProps)(Favourites)
