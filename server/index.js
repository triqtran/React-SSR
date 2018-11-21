import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Helmet} from 'react-helmet'
import {StaticRouter} from 'react-router'
import App,{css} from '../src/app'
import html from './template'

const app = express()
const PORT = process.env.PORT || 9000

app.use(bodyParser.json())
app.use(express.static('build/public'))

app.get('*', (req, res) => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  ),
    helmet = Helmet.renderStatic();
  console.log('end');
  res.send(html(helmet, css, content))
})

app.get('/api/meta/home', (req, res) => {
  res.setHeader('Content-type', 'json')
  return res.json('{title: "Home Meta Data Test SSR"}')
})

app.listen(PORT, () => {
  console.log("Server is running with port", PORT)
})
