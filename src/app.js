import React, { Component } from "react"
import Header from "./components/partials/Header"
import Content from "./components/partials/Content"
import Footer from "./components/partials/Footer"
import PropTypes from 'prop-types'

const css = new Set(); // CSS for all rendered React components
const context = { insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())) };

/**
 * 1. React có hai kiểu ContextAPI: Legacy và New, trong source code này insertCss được inject vào context của App bằng LegacyAPI
 *    nghĩa là không sử dụng Provider/Consumer, mà khai báo childContextTypes ở component cung cấp context
 *    và contextTypes ở component nhận context
 * 2. Với mỗi decorator withStyles, hàm insertCss sẽ được gọi và css generated sẽ được push vào set global `css`
 * 3. Bản thân đống css thu được sau khi render phía server side phải được output thủ công
 *    bằng cách export luôn cái set css phía trên (xem thêm server/index.js để hiểu cách dùng)
 */

class App extends Component {
  static childContextTypes={
    insertCss: PropTypes.func
  }
  getChildContext(){
    return context;
  }

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
export {css}
