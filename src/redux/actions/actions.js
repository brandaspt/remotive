import { ADD_COMPANY_TO_FAVORITES, REMOVE_COMPANY_FROM_FAVORITES } from "../types/types"

export const addCompanyToFavorites = companyName => ({
  type: ADD_COMPANY_TO_FAVORITES,
  payload: companyName,
})

export const removeCompanyFromFavorites = companyName => ({
  type: REMOVE_COMPANY_FROM_FAVORITES,
  payload: companyName,
})
