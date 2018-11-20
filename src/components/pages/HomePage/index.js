import React, { Component } from "react"
import {Helmet} from 'react-helmet'
import styles from './HomePage.module.scss'

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
          <p>Some content</p>
          <button onClick={() => {this.print()}}> Click console</button>
        </div>
      </div>
    )
  }
}

export default Home