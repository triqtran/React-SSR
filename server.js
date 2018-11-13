import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Helmet} from 'react-helmet'
import {StaticRouter} from 'react-router'
import App from './src/app'

const app = express()
const PORT = process.env.PORT || 9000

app.use(bodyParser.json())
app.use(express.static('build/public'))

app.get('*', (req, res) => {

  const context = {}
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  const helmet = Helmet.renderStatic()

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="client.bundle.js"></script>
    </body>
    </html>
  `


  res.send(html)
})

app.listen(PORT, () => {
  console.log("Server is running with port", PORT)
})