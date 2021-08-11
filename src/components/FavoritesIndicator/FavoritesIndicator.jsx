import { connect } from "react-redux"

import "./FavoritesIndicator.css"

const mapStateToProps = state => state

const FavoritesIndicator = ({ favorites }) => {
  return (
    <div className="FavoritesIndicator d-flex align-items-center justify-content-center">
      <i className="fas fa-star"></i>
      <div className="num-of-favs d-flex align-items-center justify-content-center">{favorites.length}</div>
    </div>
  )
}

export default connect(mapStateToProps)(FavoritesIndicator)
