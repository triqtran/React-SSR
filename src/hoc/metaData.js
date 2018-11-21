import 'babel-polyfill'
import React from "react"
import Helmet from 'react-helmet'
import _ from 'lodash'

const metaData = (API) => (WrappedComponent) => {

  return class MetaDataComponent extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        data: []
      }
      this.getMetaData = this.getMetaData.bind(this)
      this.renderMetaData = this.renderMetaData.bind(this)
    }

    componentDidMount() {
      this.getMetaData().then(res => {
        this.setState({
          data: _.concat(this.state.data, res)
        })
      })
    }

    async getMetaData() {
      API = API || "https://www.reddit.com/r/reactjs.json"
      return await fetch(API, {
        'mode': 'cors'
      })
      .then(response => {
        return [{property: 'title', content: 'Home Page Test HOC'}, {property: 'og:title', content: 'og title test'}]
      })
      .catch(error => {
        return [{property: 'title', content: 'Error Page Test HOC'}]
      })
    } 

    renderMetaData() {
      if(this.state.data.length < 1) {
        return (<title>None meta-data</title>)
      }
      return this.state.data.map((meta, key) => {
        if(meta.property === 'title') {
          return (<title key={key}>{meta.content}</title>)
        }
        return (<meta key={key} property={meta.property} content={meta.content} />)
      })
    }

    render() {
      const METADATA = (<Helmet>{this.renderMetaData()}</Helmet>)
      return (<WrappedComponent {...this.props} metaData={METADATA}/>)
    }
  }

}

export default metaData