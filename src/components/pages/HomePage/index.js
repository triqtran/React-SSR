import React, { Component } from "react"
import style from './HomePage.module.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import metaData from "../../../hoc/metaData"

@metaData("https://www.reddit.com/r/reactjs.json")
@withStyles(style)
class Home extends Component {

  print() {
    console.log("JS is running!")
  }

  render() {
    return (
      <div className={style.home}>
        {this.props.metaData}
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default Home
