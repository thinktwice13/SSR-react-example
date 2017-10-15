import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import Routes from "../client/Routes"

module.exports = ({ path }) => {
  const content = renderToString(
    <StaticRouter location={path} context={{}}>
      <Routes />
    </StaticRouter>
  )
  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
