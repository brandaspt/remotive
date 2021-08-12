import { FETCH_JOBS } from "../types/types"
import { initialState } from "../store"

const searchReducer = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, searchResults: action.payload }

    default:
      return state
  }
}

export default searchReducer
