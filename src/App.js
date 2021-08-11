import { Route } from "react-router-dom"

import TopBar from "./components/TopBar/TopBar"
import Home from "./views/Home"

import "./App.css"
import CompanyView from "./components/CompanyView/CompanyView"

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Route exact path="/" component={Home} />
      <Route path="/companies/:company_name" component={CompanyView} />
    </div>
  )
}

export default App
