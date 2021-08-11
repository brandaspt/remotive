import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import "./FavoritesIndicator.css"

const mapStateToProps = state => state

const FavoritesIndicator = ({ favorites, history }) => {
  return (
    <div className="FavoritesIndicator d-flex align-items-center justify-content-center" onClick={e => history.push("/favorites")}>
      <i className="fas fa-star"></i>
      <div className="num-of-favs d-flex align-items-center justify-content-center">{favorites.length}</div>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(FavoritesIndicator))