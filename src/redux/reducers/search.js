import { SET_JOBS, SET_LOADING } from "../types/types"
import { initialState } from "../store"

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case SET_JOBS:
      return { ...state, results: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default searchReducer
