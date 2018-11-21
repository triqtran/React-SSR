import React, { Component } from "react"
import style from './Header.module.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@withStyles(style)
class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        
      </header>
    )
  }
}

export default Header