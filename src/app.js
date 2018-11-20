import React, { Component } from "react"
import Header from "./components/partials/Header"
import Content from "./components/partials/Content"
import Footer from "./components/partials/Footer"

class App extends Component {
  render() {
    return (
      <div className={'app'}>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App