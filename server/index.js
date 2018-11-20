import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Helmet} from 'react-helmet'
import {StaticRouter} from 'react-router'
import App from '../src/app'
import html from './template'

const app = express()
const PORT = process.env.PORT || 9000

app.use(bodyParser.json())
app.use(express.static('build/public'))

app.get('*', (req, res) => {
  
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  res.send(html(Helmet.renderStatic(), content))
})

app.listen(PORT, () => {
  console.log("Server is running with port", PORT)
})