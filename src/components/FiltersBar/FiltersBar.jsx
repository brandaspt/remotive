import { useState, useCallback, useEffect } from "react"
import { Button, Form, Row, Spinner } from "react-bootstrap"

import { fetchCategories } from "../../backend/requests"

const FiltersBar = ({ handleCategoryChange, handleSearch }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const getCategories = useCallback(async () => {
    setIsLoading(true)
    const { data } = await fetchCategories()
    setCategories([{ name: "All", id: 0 }, ...data.jobs])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
    <Row className="d-flex flex-column align-items-start justify-content-center py-4">
      {isLoading ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <Form
          className="d-flex w-100 align-items-end justify-content-between"
          onSubmit={e => {
            e.preventDefault()
            handleSearch(searchQuery)
          }}
        >
          <Form.Group className="m-0">
            <Form.Label>Filter by Category:</Form.Label>
            <Form.Control as="select" onChange={e => handleCategoryChange(e.target.value)}>
              {categories.map(category => (
                <option key={category.id}>{category.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="d-flex m-0">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Button variant="secondary" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>
      )}
    </Row>
  )
}
export default FiltersBar
