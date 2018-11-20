import React, { Component } from "react"
import {Helmet} from 'react-helmet'
import styles from './HomePage.module.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@withStyles(styles)
class Home extends Component {

  print() {
    console.log("JS is running!")
  }

  head() {
    return (
      <Helmet>
        <title>Home Page</title>
      </Helmet>
    )
  }

  render() {
    return (
      <div className={'home'}>
      {this.head()}
        <h1 className={styles.highlight}>My Home Page</h1>
        <div className={'content'}>
          <p className={styles.highlightGreen}>Some content</p>
          <button onClick={() => {this.print()}}> Click console</button>
        </div>
      </div>
    )
  }
}

export default Home
