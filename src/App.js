import { Route } from "react-router-dom"

import TopBar from "./components/TopBar/TopBar"
import Home from "./views/Home"

import "./App.css"
import Company from "./views/Company"
import Favorites from "./views/Favorites"

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route path="/companies/:company_name" component={Company} />
    </div>
  )
}

export default App
