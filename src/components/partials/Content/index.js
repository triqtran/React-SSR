import React, { Component } from "react"
import {Switch, Route} from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import style from './Content.module.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@withStyles(style)
class Content extends Component {
  render() {
    return (
      <div className={style.content}>
        <Switch>
          <Route path="/home" render={props => <HomePage {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default Content