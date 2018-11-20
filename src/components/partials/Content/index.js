import React, { Component } from "react"
import {Switch, Route} from 'react-router-dom'
import HomePage from '../../pages/HomePage'


class Content extends Component {
  render() {
    return (
      <div className={'content'}>
        <Switch>
          <Route path="/home" render={props => <HomePage {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default Content