import { connect } from "react-redux"
import { addCompanyToFavorites, removeCompanyFromFavorites } from "../../redux/actions/actions"

import "./ToggleFavoriteIcon.css"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  addToFavorites: companyName => dispatch(addCompanyToFavorites(companyName)),
  removeFromFavorites: companyName => dispatch(removeCompanyFromFavorites(companyName)),
})

const ToggleFavoriteIcon = ({ favorites, addToFavorites, removeFromFavorites, company }) => {
  return (
    <div className="ToggleFavoriteIcon">
      {favorites.includes(company) ? (
        <i className="fas fa-star" onClick={e => removeFromFavorites(company)}></i>
      ) : (
        <i className="far fa-star" onClick={e => addToFavorites(company)}></i>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavoriteIcon)
