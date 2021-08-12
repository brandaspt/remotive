import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import FavoriteItem from "../components/FavoriteItem/FavoriteItem"

const mapStateToProps = state => state

const FavoriteCompanies = ({ favorites }) => {
  return (
    <Container className="d-flex flex-wrap justify-content-center align-items-center">
      {favorites.companies.map(companyName => (
        <FavoriteItem key={companyName} companyName={companyName} />
      ))}
    </Container>
  )
}

export default connect(mapStateToProps)(FavoriteCompanies)
