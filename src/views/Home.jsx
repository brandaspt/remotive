import { useState, useCallback, useEffect } from "react"
import { Container } from "react-bootstrap"
import { fetchByCategory, fetchByQuery } from "../backend/requests"
import FiltersBar from "../components/FiltersBar/FiltersBar"

import JobsGrid from "../components/JobsGrid/JobsGrid"

const Home = () => {
  const [jobsList, setJobsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getJobs = useCallback(async query => {
    setIsLoading(true)
    const { data } = await fetchByQuery(query)
    setJobsList(data.jobs)
    setIsLoading(false)
  }, [])

  const handleCategoryChange = async category => {
    if (category === "All") await getJobs("")
    else {
      setIsLoading(true)
      const { data } = await fetchByCategory(category)
      setJobsList(data.jobs)
      setIsLoading(false)
    }
  }

  const handleSearch = async query => {
    getJobs(query)
  }

  useEffect(() => {
    getJobs("")
  }, [getJobs])

  return (
    <Container>
      <FiltersBar handleCategoryChange={handleCategoryChange} handleSearch={handleSearch} />
      <JobsGrid jobsList={jobsList} isLoading={isLoading} />
    </Container>
  )
}

export default Home
