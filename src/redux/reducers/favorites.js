import { ADD_COMPANY_TO_FAVORITES, ADD_JOB_TO_FAVORITES, REMOVE_COMPANY_FROM_FAVORITES, REMOVE_JOB_FROM_FAVORITES } from "../types/types"
import { initialState } from "../store"

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_COMPANY_TO_FAVORITES:
      return { ...state, companies: [...state.companies, action.payload] }

    case REMOVE_COMPANY_FROM_FAVORITES:
      return { ...state, companies: [...state.companies.filter(companyName => companyName !== action.payload)] }

    case ADD_JOB_TO_FAVORITES:
      return { ...state, jobs: [...state.jobs, action.payload] }

    case REMOVE_JOB_FROM_FAVORITES:
      return { ...state, jobs: [...state.jobs.filter(job => job.id !== action.payload)] }

    default:
      return state
  }
}

export default favoritesReducer
