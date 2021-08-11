import { useState, useEffect, useCallback } from "react"
import { fetchByCompany } from "../../backend/requests"

const CompanyView = ({ match }) => {
  const [companyDetails, setCompanyDetails] = useState(null)

  const getCompanyDetails = useCallback(async () => {
    const { data } = await fetchByCompany(match.params.company_name)
    setCompanyDetails(data.jobs)
  }, [match.params.company_name])

  useEffect(() => {
    getCompanyDetails()
  }, [getCompanyDetails])

  return <div></div>
}

export default CompanyView
