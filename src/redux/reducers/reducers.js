import { ADD_COMPANY_TO_FAVORITES, REMOVE_COMPANY_FROM_FAVORITES } from "../types/types"

const initialState = {
  favorites: [],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] }

    case REMOVE_COMPANY_FROM_FAVORITES:
      return { ...state, favorites: [...state.favorites.filter(companyName => companyName !== action.payload)] }

    default:
      return state
  }
}

export default mainReducer
