import React, { Component } from "react"
import style from './Footer.module.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@withStyles(style)
class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        
      </div>
    )
  }
}

export default Footer