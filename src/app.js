import React, { Component } from "react"
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/home"

class App extends Component {
  render() {
    return (
      <div className={'app'}>
        <Switch>
          <Route path="/home" render={props => <Home {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default App