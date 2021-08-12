import { useState, useCallback, useEffect } from "react"
import { connect } from "react-redux"
import { Container } from "react-bootstrap"
import { fetchByCategory, fetchByQuery } from "../backend/requests"
import FiltersBar from "../components/FiltersBar/FiltersBar"

import JobsGrid from "../components/JobsGrid/JobsGrid"
import { fetchJobs } from "../redux/actions/actions"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  getJobs: query => dispatch(fetchJobs(query)),
})

const Home = ({ search, getJobs }) => {
  // const handleCategoryChange = async category => {
  //   if (category === "All") await getJobs("")
  //   else {
  //     setIsLoading(true)
  //     const { data } = await fetchByCategory(category)
  //     setJobsList(data.jobs)
  //     setIsLoading(false)
  //   }
  // }

  const handleSearch = async query => {
    getJobs(query)
  }

  useEffect(() => {
    getJobs("")
  }, [getJobs])

  return (
    <Container>
      <FiltersBar
        // handleCategoryChange={handleCategoryChange}
        handleSearch={handleSearch}
      />
      <JobsGrid jobsList={search.results} isLoading={search.loading} />
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
