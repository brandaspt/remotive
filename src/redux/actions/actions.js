import { fetchByQuery } from "../../backend/requests"
import {
  ADD_COMPANY_TO_FAVORITES,
  ADD_JOB_TO_FAVORITES,
  REMOVE_COMPANY_FROM_FAVORITES,
  REMOVE_JOB_FROM_FAVORITES,
  SET_JOBS,
  SET_LOADING,
} from "../types/types"

export const addCompanyToFavorites = companyName => ({
  type: ADD_COMPANY_TO_FAVORITES,
  payload: companyName,
})

export const removeCompanyFromFavorites = companyName => ({
  type: REMOVE_COMPANY_FROM_FAVORITES,
  payload: companyName,
})

export const addJobToFavorites = job => ({
  type: ADD_JOB_TO_FAVORITES,
  payload: job,
})

export const removeJobFromFavorites = jobId => ({
  type: REMOVE_JOB_FROM_FAVORITES,
  payload: jobId,
})

export const fetchJobs = query => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    })
    try {
      const { data } = await fetchByQuery(query)
      dispatch({
        type: SET_JOBS,
        payload: data.jobs,
      })
      dispatch({
        type: SET_LOADING,
        payload: false,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: SET_LOADING,
        payload: false,
      })
    }
  }
}
