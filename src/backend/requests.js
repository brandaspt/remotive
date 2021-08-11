import remotive from "./backend"

export const fetchByQuery = async query => {
  return await remotive.get(`/remote-jobs?search=${query}`)
}
export const fetchByCompany = async companyName => {
  return await remotive.get(`/remote-jobs?company_name=${companyName}`)
}

export const fetchCategories = async () => {
  return await remotive.get(`/remote-jobs/categories`)
}

export const fetchByCategory = async category => {
  return await remotive.get(`/remote-jobs?category=${category}`)
}
